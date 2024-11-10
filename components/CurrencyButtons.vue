<template>
    <div flex gap-3>
        <div
            v-for="el in currencyOptions"
            :key="el.value"
            flex
            justify-center
            items-center
            py-2
            px-4
            border
            border-solid
            border-blue-6
            text-3
            text-blue-6
            font-500
            rounded
            cursor-pointer
            class="hover:bg-blue-6 hover:text-white"
            :class="{
                'bg-blue-6 text-white': currency === el.value,
            }"
            @click="currency = el.value"
        >
            {{ el.label }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Currency, Option } from '~/types/General';

interface Props {
    modelValue: Currency;
}

const props = defineProps<Props>();
const { modelValue } = toRefs(props);

const emit = defineEmits<{ 'update:modelValue': [currency: Currency] }>();

const currencyCookie = useCookie('currency');

const currency = computed<Currency>({
    get: () => modelValue.value,
    set: (value) => {
        // localStorage.setItem('currency', value);
        currencyCookie.value = value;
        emit('update:modelValue', value);
    },
});

const currencyOptions: Option<Currency>[] = [
    { value: 'MDL', label: 'MDL' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'RON', label: 'RON' },
];
</script>

<style scoped></style>
