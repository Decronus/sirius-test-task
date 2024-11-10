<template>
    <div class="default-layout">
        <slot />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.default-layout {
    padding: 48px calc(50% - 460px);

    @media (max-width: 980px) {
        padding: 48px 30px;
    }

    @media (max-width: 430px) {
        padding: 20px;
    }
}
</style>
