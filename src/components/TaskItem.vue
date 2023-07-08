<template>
    <div class="item">
        <p class="item__title">{{ props.title }}</p>
        <p class="item__content">{{ props.content }}</p>
        <p class="item__result">{{ props.is_ready ? 'Готово' : 'Не готово' }}</p>
        <ButtonUI @click="changeStatus">Изменить статус</ButtonUI>
    </div>
</template>

<script setup lang="ts">
import { Task } from '@/types/user.interface';
import ButtonUI from '@/components/ButtonUI.vue';

const props = withDefaults(defineProps<Task>(), {
    id: 0,
    title: '',
    content: '',
    is_ready: false
})

const emit = defineEmits(['statusChanged']);

const changeStatus = () => {
    emit('statusChanged', { taskId: props.id })
}
</script>

<style lang="scss" setup>
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title, &__content {
        font-size: 20px;
    }

    &__result {
        width: 75px;
    }
}
</style>
