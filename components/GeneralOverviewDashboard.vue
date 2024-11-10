<template>
    <div flex flex-row gap-5 rounded-2 p-6 flex-auto block-shadow class="max-sm:flex-col max-sm:p-4">
        <div flex flex-col>
            <div v-if="type === 'invoices'" flex items-center gap-1 mb-6>
                <div i-mdi-chart-line-variant text-green-5 />
                <span>Total invoiced</span>
            </div>
            <div v-if="type === 'payments'" flex items-center gap-1 mb-6>
                <div v-if="type === 'payments'" i-mdi-chart-line-variant text-red-7 transform-scale-y--100 />
                <span>Total payments</span>
            </div>
            <span text-7 font-700 mb-3>15 183 MDL</span>
            <span text-3 font-400>Average Payment Date: <span text-primary-blue>0&nbsp;days</span></span>
        </div>

        <div bg-primary-light h-auto w-0.5 shrink-0 class="max-sm:w-auto max-sm:h-0.5"></div>

        <div flex flex-col gap-3 class="max-sm:flex-row max-sm:gap-8">
            <div>
                <div flex items-center gap-1 mb-2>
                    <div i-mdi-wallet text-green-5 h-4.5 w-4.5 />
                    <span text-sm>Paid</span>
                </div>
                <span text-4 font-700>0 MDL</span>
            </div>

            <div>
                <div flex items-center gap-1 mb-2>
                    <div i-mdi-wallet text-orange-3 h-4.5 w-4.5 />
                    <span text-sm>Not paid (100%)</span>
                </div>
                <span text-4 font-700>0 MDL</span>
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
