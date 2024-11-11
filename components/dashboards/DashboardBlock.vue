<template>
    <div class="dashboard-block">
        <h3 text-10 font-700 main-text-dark text-xl mb-3>{{ title }}</h3>
        <slot />
    </div>
</template>

<script setup lang="ts">
interface Props {
    title?: string;
}
defineProps<Props>();
</script>

<style scoped></style>
