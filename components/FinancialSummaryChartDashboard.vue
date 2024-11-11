<template>
    <div rounded-2 p-6 w-50% block-shadow overflow-y-auto class="max-sm:p-4 max-md:w-auto">
        <div flex justify-between items-center gap-15 mb-5 w-auto>
            <div v-if="type === 'invoices'" flex items-center gap-1>
                <div i-mdi-chart-line-variant text-green-5 />
                <span>Invoiced</span>
            </div>
            <div v-if="type === 'payments'" flex items-center gap-1>
                <div v-if="type === 'payments'" i-mdi-chart-line-variant text-red-7 transform-scale-y--100 />
                <span>Payments</span>
            </div>

            <span text-3 font-400 whitespace-nowrap>
                Average Payment Days:
                <br />
                <span text-primary-blue>{{ data.averagePaymentDays }}&nbsp;days</span></span
            >
        </div>

        <div flex justify-between gap-4 class="max-sm:flex-col items-center">
            <div w-32 h-32 class="max-lg:w-28 h-28">
                <DoughnutChart :data="doughnutData" />
            </div>

            <div min-w-42 space-y-3>
                <div flex justify-between gap-3>
                    <div flex gap-2>
                        <div
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-6
                            text-white
                            :class="[data.total.quantity <= 99 ? 'text-xs' : 'text-2']"
                        >
                            {{ formatQuantity(data.total.quantity) }}
                        </div>
                        <span text-sm font-700>Total</span>
                    </div>
                    <span whitespace-nowrap text-sm font-700>{{ `${data.total.sum} ${currency}` }}</span>
                </div>

                <div w-auto h-0.25 bg-primary-light />

                <div flex justify-between gap-3>
                    <div flex gap-2>
                        <div
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-4
                            text-white
                            :class="[data.paid.quantity <= 99 ? 'text-xs' : 'text-2']"
                        >
                            {{ formatQuantity(data.paid.quantity) }}
                        </div>
                        <span text-sm>Received</span>
                    </div>
                    <span whitespace-nowrap text-sm>{{ `${data.paid.sum} ${currency}` }}</span>
                </div>

                <div flex justify-between gap-3>
                    <div flex gap-2>
                        <div
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-3
                            text-dark-3
                            :class="[data.due.quantity < 99 ? 'text-xs' : 'text-2']"
                        >
                            {{ formatQuantity(data.due.quantity) }}
                        </div>
                        <span text-sm>Due</span>
                    </div>
                    <span whitespace-nowrap text-sm>{{ `${data.due.sum} ${currency}` }}</span>
                </div>

                <div flex justify-between gap-3>
                    <div flex gap-2>
                        <div
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-red-7
                            text-white
                            :class="[data.overdue.quantity <= 99 ? 'text-xs' : 'text-2']"
                        >
                            {{ formatQuantity(data.overdue.quantity) }}
                        </div>
                        <span text-sm>Overdue</span>
                    </div>
                    <span whitespace-nowrap text-sm>{{ `${data.overdue.sum} ${currency}` }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { DashboardFormattedData } from '~/types/General';

interface Props {
    type: 'invoices' | 'payments';
    data: DashboardFormattedData;
}

const props = defineProps<Props>();
const { data } = toRefs(props);

const currency = useCookie('currency');

const doughnutData = computed(() => [data.value.paid.sum, data.value.due.sum, data.value.overdue.sum]);

function formatQuantity(quantity: number) {
    return quantity > 99 ? '99+' : quantity;
}
</script>

<style scoped></style>
