<template>
    <div rounded-2 p-4 flex-auto block-shadow overflow-y-auto class="sm:p-6">
        <div flex justify-between items-center gap-15 mb-5 w-100%>
            <div v-if="type === 'invoices'" flex items-center gap-1>
                <div i-mdi-chart-line-variant text-green-5 />
                <span>Invoiced</span>
            </div>
            <div v-if="type === 'payments'" flex items-center gap-1>
                <div v-if="type === 'payments'" i-mdi-chart-line-variant text-red-7 transform-scale-y--100 />
                <span>Payments</span>
            </div>

            <span text-3 font-400 whitespace-nowrap>
                Average Payment Date:
                <br />
                <span text-primary-blue>0&nbsp;days</span></span
            >
        </div>

        <div flex justify-between gap-4 class="max-sm:flex-col items-center">
            <div w-32 h-32 class="max-lg:w-28 h-28">
                <DoughnutChart />
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
                            text-xs
                            bg-blue-6
                            text-white
                        >
                            5
                        </div>
                        <span text-sm font-700>Total</span>
                    </div>
                    <span whitespace-nowrap text-sm font-700>13 925 RON</span>
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
                            text-xs
                            bg-blue-4
                            text-white
                        >
                            3
                        </div>
                        <span text-sm>Received</span>
                    </div>
                    <span whitespace-nowrap text-sm>13 925 RON</span>
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
                            text-xs
                            bg-blue-3
                            text-dark-3
                        >
                            0
                        </div>
                        <span text-sm>Due</span>
                    </div>
                    <span whitespace-nowrap text-sm>13 925 RON</span>
                </div>

                <div flex justify-between gap-3>
                    <div flex gap-2>
                        <div flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs bg-red-7 text-white>
                            1
                        </div>
                        <span text-sm>Overdue</span>
                    </div>
                    <span whitespace-nowrap text-sm>6 925 RON</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    type: 'invoices' | 'payments';
}

defineProps<Props>();
</script>

<style scoped></style>
