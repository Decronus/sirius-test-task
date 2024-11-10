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
                <GeneralOverviewDashboard type="invoices" :data="invoices" />
                <GeneralOverviewDashboard type="payments" :data="invoices" />
            </div>
        </DashboardBlock>

        <DashboardBlock title="Financial summary" mb-20>
            <div flex flex-row justify-between gap-3 class="max-md:flex-col">
                <FinancialSummaryChartDashboard type="invoices" :data="invoices" />
                <FinancialSummaryChartDashboard type="payments" :data="invoices" />
            </div>
        </DashboardBlock>

        <DashboardBlock title="Cash flow">
            <CashFlowBlock />
        </DashboardBlock>
    </div>
</template>

<script setup lang="ts">
import { invoices } from '@/utils/mockData';
import type { Currency } from '@/types/General';
import CurrencyButtons from '~/components/CurrencyButtons.vue';

const notificationMessage = ref<string>('');

const { error } = await useFetch('/api/non-existing-endpoint');
if (error.value) {
    notificationMessage.value = error.value.message;
}

const currencyCookie = useCookie<Currency>('currency');
const currency = ref<Currency>(currencyCookie.value || 'MDL');

const totalInvoiced = ref<number>();

// const totalInvoiced = computed<number>(() => {
//     return invoices.reduce((acc, invoice) => {
//         return acc + invoice.items.reduce((acc, item) => acc + item.price[currency.value] * item.quantity, 0);
//     }, 0);
// });
// console.log('totalInvoiced', totalInvoiced.value);

// const totalInvoiced = computed<number>(() => {
//     return invoices.reduce((acc, invoice) => {
//         return acc + invoice.items.reduce((acc, item) => acc + item.price[currency.value] * item.quantity, 0);
//     }, 0);
// });
// console.log('totalInvoiced', totalInvoiced.value);

useHead({
    title: 'Dashboard',
});
</script>

<style scoped></style>
