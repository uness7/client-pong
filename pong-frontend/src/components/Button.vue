
<template>
    <button
        :class="['custom-button', props.size, { 'is-outlined': props.outlined }]"
        :style="{ backgroundColor: props.bgColor, color: props.textColor, width: props.width + '%'}"
        @click="emit('click')"
    >
        <slot>{{ props.text }}</slot>
    </button>
</template>


<script setup>
import { defineProps, defineEmits } from 'vue';
    const props = defineProps({
        text: {
            type: String,
            default: 'Button'
        },
        size: {
            type: String,
            default: 'medium',
            validator: (value) => ['small', 'medium', 'large'].includes(value)
        },
        bgColor: {
            type: String,
            default: '#3498db'
        },
        textColor: {
            type: String,
            default: '#ffffff'
        },
        outlined: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: 10,
        }
    });
    const emit = defineEmits(['click']);
</script>



<style scoped>
.custom-button {
    padding: 20px 30px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s ease;
    width: 10%;
}

.custom-button:hover,
.custom-button:focus-visible{
    background: hsl(185, 53%, 34%)
}

.custom-button.small {
    font-size: x-large;
    padding: 6px 12px;
}

.custom-button.medium {
    font-size: x-large;
    padding: 8px 16px;
}

.custom-button.large {
    font-size: xx-large;
    padding: 10px 20px;
    text-align: center;
    width: 100%;
}

.custom-button.is-outlined {
    background-color: transparent !important;
    border: 2px solid;
}
</style>