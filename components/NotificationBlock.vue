<template>
    <div w-auto p-6 flex items-center gap-3 bg-green-2 rounded-2 :class="bgColor">
        <div flex-shrink-0 h-6 w-6 class="max-sm:h-4 max-sm:w-4" :class="[textColor, icon]" />
        <span class="max-sm:text-3" :class="textColor">{{ text }}</span>
        <div
            i-mdi-close
            flex-shrink-0
            ml-auto
            cursor-pointer
            class="max-sm:h-4 max-sm:w-4"
            :class="[textColor, 'hover:opacity-70%']"
            @click="emit('close')"
        />
    </div>
</template>

<script setup lang="ts">
interface Props {
    type: 'success' | 'error' | 'warn';
    text: string;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'success',
    text: 'Success message',
});
const { type } = toRefs(props);

const emit = defineEmits<{ close: [] }>();

const bgColor = computed<string>(() => {
    switch (type.value) {
        case 'success':
            return 'bg-green-2';
        case 'error':
            return 'bg-red-2';
        case 'warn':
            return 'bg-orange-2';
        default:
            return 'bg-green-2';
    }
});

const textColor = computed<string>(() => {
    switch (type.value) {
        case 'success':
            return 'text-green-5';
        case 'error':
            return 'text-red-5';
        case 'warn':
            return 'text-orange-5';
        default:
            return 'text-green-5';
    }
});

const icon = computed<string>(() => {
    switch (type.value) {
        case 'success':
            return 'i-mdi-check-circle';
        case 'error':
            return 'i-mdi-close-circle';
        case 'warn':
            return 'i-mdi-alert-circle';
        default:
            return 'i-mdi-check-circle';
    }
});
</script>

<style scoped></style>
