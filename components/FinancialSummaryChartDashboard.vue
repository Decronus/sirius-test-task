<template>
    <div flex flex-col gap-5 rounded-2 p-4 flex-auto block-shadow class="sm:p-6">
        <div flex justify-between items-center gap-6 mb-6 w-100%>
            <div v-if="type === 'invoices'" flex items-center gap-1>
                <div i-mdi-chart-line-variant text-green-5 />
                <span>Total invoiced</span>
            </div>
            <div v-if="type === 'payments'" flex items-center gap-1>
                <div v-if="type === 'payments'" i-mdi-chart-line-variant text-red-7 transform-scale-y--100 />
                <span>Total payments</span>
            </div>

            <span text-3 font-400>Average Payment Date:<br /><span text-primary-blue>0&nbsp;days</span></span>
        </div>

        <div flex justify-between gap-6>
            <div w-full h-full>
                <DoughnutChart />
            </div>

            <div w-42 space-y-3>
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
                        <span text-sm>Total</span>
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
                        <span text-sm>Total</span>
                    </div>
                    <span whitespace-nowrap text-sm>13 925 RON</span>
                </div>

                <div flex justify-between gap-3>
                    <div flex gap-2>
                        <div flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs bg-red-7 text-white>
                            1
                        </div>
                        <span text-sm>Total</span>
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
