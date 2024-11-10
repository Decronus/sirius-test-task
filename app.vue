<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    ArcElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, ArcElement, LineElement, PointElement, CategoryScale, LinearScale);
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap');

* {
    font-family: 'Onest', sans-serif;
    margin: 0;
    padding: 0;
}
</style>
