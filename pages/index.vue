<template>
    <div min-h-screen mb-20>
        <div flex items-center justify-between gap-6 flex-wrap mb-12>
            <h1 font-700 main-text-dark text-10>Dashboard</h1>

            <CurrencyButtons v-model="currency" />
        </div>

        <client-only>
            <NotificationBlock
                v-if="notificationMessage"
                type="error"
                :text="notificationMessage"
                mb-6
                @close="notificationMessage = ''"
            />
        </client-only>

        <DashboardBlock title="General overview" mb-20>
            <div flex flex-row justify-between gap-3 class="max-md:flex-col">
                <GeneralOverviewDashboard type="invoices" :data="invoicesData" />
                <GeneralOverviewDashboard type="payments" :data="paymentsData" />
            </div>
        </DashboardBlock>

        <DashboardBlock title="Financial summary" mb-20>
            <div flex flex-row justify-between gap-3 mb-3 class="max-md:flex-col">
                <FinancialSummaryChartDashboard type="invoices" :data="invoicesData" />
                <FinancialSummaryChartDashboard type="payments" :data="paymentsData" />
            </div>
            <div flex flex-row items-start justify-between gap-3 class="max-md:flex-col max-md:items-stretch">
                <TopOverdueDashboard type="invoices" :data="topOverdueInvoices" />
                <TopOverdueDashboard type="payments" :data="topOverduePayments" />
            </div>
        </DashboardBlock>

        <DashboardBlock title="Cash flow">
            <CashFlowBlock :data="cashFlow" />
        </DashboardBlock>
    </div>
</template>

<script setup lang="ts">
import type { Currency, DashboardFormattedData, Invoice, Payment } from '@/types/General';
import CurrencyButtons from '~/components/CurrencyButtons.vue';
import { useGeneralStore } from '@/store/general';
import TopOverdueDashboard from '~/components/dashboards/TopOverdueDashboard.vue';
import { calculateDaysDifference } from '@/utils/utils';

const generalStore = useGeneralStore();
const { invoices, payments } = generalStore;

const notificationMessage = ref<string>('');

const { error } = await useFetch('/api/non-existing-endpoint');
if (error.value) {
    const errorMessage = error.value.message || 'An unexpected error occurred';
    notificationMessage.value = errorMessage;
    ElNotification.error(errorMessage);
}

const currencyCookie = useCookie<Currency>('currency');
const currency = ref<Currency>(currencyCookie.value || 'MDL');
watch(currency, () => {
    prepareData(invoices, invoicesData);
    prepareData(payments, paymentsData);
});

const baseDataElement = { sum: 0, quantity: 0 };
const dashboardBaseObject: DashboardFormattedData = {
    total: { ...baseDataElement },
    paid: { ...baseDataElement },
    unpaid: { ...baseDataElement },
    due: { ...baseDataElement },
    overdue: { ...baseDataElement },
    averagePaymentDays: 0,
};
const invoicesData = reactive<DashboardFormattedData>({ ...dashboardBaseObject });
const paymentsData = reactive<DashboardFormattedData>({ ...dashboardBaseObject });
const topOverdueInvoices = ref<Invoice[]>([]);
const topOverduePayments = ref<Payment[]>([]);
const cashFlow = computed<number[]>(() => {
    const cashFlowBase: number[] = new Array(12).fill(0);
    invoices.forEach((el) => {
        if (el.status === 'paid') {
            const month = new Date(el.paymentDate).getMonth();
            cashFlowBase[month] += el.items.reduce((acc, item) => acc + item.price[currency.value] * item.quantity, 0);
        }
    });
    payments.forEach((el) => {
        const month = new Date(el.paymentDate).getMonth();
        cashFlowBase[month] -= el.items.reduce((acc, item) => acc + item.price[currency.value] * item.quantity, 0);
    });
    return cashFlowBase;
});

prepareData(invoices, invoicesData);
prepareData(payments, paymentsData);
prepareTopOverdue(invoices, topOverdueInvoices);
prepareTopOverdue(payments, topOverduePayments);

function prepareData(data: Array<Invoice | Payment>, formattedObject: DashboardFormattedData) {
    const total = { ...baseDataElement };
    const paid = { ...baseDataElement };
    const unpaid = { ...baseDataElement };
    const due = { ...baseDataElement };
    const overdue = { ...baseDataElement };
    const averagePaymentDays: number[] = [];

    data.forEach((el) => {
        // General overview
        const sum = el.items.reduce((acc, item) => acc + item.price[currency.value] * item.quantity, 0);
        total.sum += sum;
        total.quantity += 1;

        if (el.status === 'paid') {
            paid.sum += sum;
            paid.quantity += 1;
        } else {
            unpaid.sum += sum;
            unpaid.quantity += 1;
        }

        if (el.status === 'unpaid') {
            // Financial overview
            if (el.dueDate) {
                const dueDate = new Date(el.dueDate);

                if (el.paymentDate) {
                    const paymentDate = new Date(el.paymentDate);

                    if (paymentDate > dueDate) {
                        overdue.sum += sum;
                        overdue.quantity += 1;
                    } else {
                        due.sum += sum;
                        due.quantity += 1;
                    }
                } else {
                    if (dueDate < new Date()) {
                        overdue.sum += sum;
                        overdue.quantity += 1;
                    } else {
                        due.sum += sum;
                        due.quantity += 1;
                    }
                }
            }
        } else {
            // Average payment days
            if (el.issueDate && el.paymentDate) {
                const paymentDate = new Date(el.paymentDate);
                const issueDate = new Date(el.issueDate);
                averagePaymentDays.push(calculateDaysDifference(paymentDate, issueDate));
            }
        }
    });

    formattedObject.total = total;
    formattedObject.paid = paid;
    formattedObject.unpaid = unpaid;
    formattedObject.due = due;
    formattedObject.overdue = overdue;
    formattedObject.averagePaymentDays = Math.round(
        averagePaymentDays.reduce((acc, el) => acc + el, 0) / averagePaymentDays.length
    );
}

function prepareTopOverdue(data: Array<Invoice | Payment>, formattedObject: Ref<Array<Invoice | Payment>>) {
    formattedObject.value = data
        .filter((el) => el.status === 'unpaid')
        .filter((el) => new Date(el.dueDate) < new Date())
        .sort((a, b) => {
            if (a.dueDate && b.dueDate) {
                return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
            }
            return 0;
        })
        .slice(0, 5);
}

useHead({
    title: 'Dashboard',
});
</script>

<style scoped></style>
