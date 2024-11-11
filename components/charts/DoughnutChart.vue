<template>
    <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Doughnut } from 'vue-chartjs';

interface Props {
    type: 'invoices' | 'payments';
    data: number[];
}

const props = defineProps<Props>();
const { type, data } = toRefs(props);

const chartData = computed(() => {
    return {
        labels: ['Received', 'Due', 'Overdue'],
        datasets: [
            {
                data: data.value,
                backgroundColor: ['#60A5FAFF', '#93C5FDFF', '#B91C1CFF'],
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
                    return `${type.value[0].toUpperCase() + type.value.slice(1)}: ${value}`; // Кастомный текст тултипа
                },
            },
        },
    },
});
</script>

<style scoped></style>
