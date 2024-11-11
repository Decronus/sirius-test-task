<template>
    <div h-90 w-auto p-6 rounded block-shadow class="max-sm:p-4">
        <LineChart :data="data" />
    </div>
</template>

<script setup lang="ts">
import LineChart from '~/components/charts/LineChart.vue';

interface Props {
    data: number[];
}

defineProps<Props>();
</script>

<style scoped></style>
