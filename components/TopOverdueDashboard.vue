<template>
    <div w-50% gap-5 rounded-2 p-6 flex-auto block-shadow class="max-sm:p-4 max-md:w-auto">
        <div flex items-center gap-2 mb-3>
            <div bg-red-7 w-4.5 h-4.5 min-w-4.5 flex items-center justify-center rounded-full />
            <span v-if="type === 'invoices'">Top-5 Overdue Invoices</span>
            <span v-if="type === 'payments'">Top-5 Overdue payments</span>
        </div>

        <div w-auto h-0.25 bg-primary-light mb-3 />

        <div space-y-4 mb-3>
            <div v-for="el in data" :key="el.id" grid grid-cols-4 items-center justify-between gap-2>
                <div col-span-2 flex items-center gap-2>
                    <div i-mdi-work-outline w-4.5 h-4.5 min-w-4.5 />
                    <span>{{ el.customerName }}</span>
                </div>
                <div text-gray-6 text-xs>
                    {{ calculateDaysDifference(new Date(), new Date(el.issueDate)) }} days ago
                </div>
                <div text-sm>
                    {{ el.items.reduce((acc, curr) => acc + curr.price[currency] * curr.quantity, 0) }}&nbsp;{{
                        currency
                    }}
                </div>
            </div>
        </div>

        <div w-auto h-0.25 bg-primary-light mb-3 />

        <div font-700 flex items-center justify-between text-xl>
            <div>Total</div>
            <div>860&nbsp;€</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Invoice, Payment, Currency } from '~/types/General';
import { calculateDaysDifference } from '@/utils/utils';

interface Props {
    type: 'invoices' | 'payments';
    data: Array<Invoice | Payment>;
}

defineProps<Props>();

const currency = useCookie<Currency>('currency');
</script>

<style scoped></style>
