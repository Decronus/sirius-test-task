<template>
    <Line v-if="chartData" :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Line } from 'vue-chartjs';

interface Props {
    data: number[];
}

const props = defineProps<Props>();
const { data } = toRefs(props);

const currency = useCookie('currency');

const chartData = computed(() => {
    return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                data: data.value,
                borderColor: '#0fcdb3',
                backgroundColor: '#f87979',
                pointBackgroundColor: '#1d6eea',
                borderWidth: 1,
                pointRadius: 5,
            },
        ],
    };
});
const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        tooltip: {
            callbacks: {
                label: function (context: any) {
                    const value = context.raw || 0;
                    return `${value} ${currency.value}`; // Кастомный текст тултипа
                },
            },
        },
    },
});
</script>

<style scoped></style>
