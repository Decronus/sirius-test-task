<template>
    <Line v-if="chartData" :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { ref } from 'vue';
import { Line } from 'vue-chartjs';

// Создаем реактивные данные и опции для графика
const chartData = ref({
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    datasets: [
        {
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40, 40, 39, 10, 40, 39],
        },
    ],
});
const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
});
</script>

<style scoped></style>
