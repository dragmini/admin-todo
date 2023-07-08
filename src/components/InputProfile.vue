<template>
    <label class="input">
        <span class="input__span">{{ props.label }}</span>
        <input class="input__field" v-model="inputValue" :placeholder="placeholder" @input="handleInput" />
    </label>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { InputProfile } from "@/types/input.interface"

const props = withDefaults(defineProps<InputProfile>(), {
    modelValue: '',
    label: '',
    placeholder: ''
})

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);

const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    inputValue.value = target.value;
    emit('update:modelValue', inputValue.value);
};
</script>

<style lang="scss" setup>
.input {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &__field {
        padding: 10px 5px;
        font-size: 14px;
        border-radius: 10px;
        border: 1px solid #001329;
    }
}
</style>