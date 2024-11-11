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

const chartData = computed(() => {
    return {
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
});
</script>

<style scoped></style>
