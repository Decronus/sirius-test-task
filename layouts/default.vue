<template>
    <div class="default-layout">
        <slot />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.default-layout {
    padding: 48px calc(50% - 570px);

    @media (max-width: 1200px) {
        padding: 48px 30px;
    }

    @media (max-width: 430px) {
        padding: 20px;
    }
}
</style>
