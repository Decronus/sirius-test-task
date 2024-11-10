<template>
    <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { ref } from 'vue';
import { Doughnut } from 'vue-chartjs';

const chartData = ref({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'My Dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        },
    ],
});

const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
});
</script>

<style scoped></style>
