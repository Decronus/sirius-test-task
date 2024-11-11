<template>
    <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Doughnut } from 'vue-chartjs';

interface Props {
    data: number[];
}

const props = defineProps<Props>();
const { data } = toRefs(props);

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
});
</script>

<style scoped></style>
