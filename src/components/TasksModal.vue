<template>
    <section class="modal">
        <p class="modal__title">Список дел</p>
        <div class="modal__items">
            <TaskItem v-for="task in props.tasks" :key="task.id" v-bind="task" @statusChanged="changeStatus"/>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Task } from '@/types/user.interface';
import TaskItem from './TaskItem.vue';
import { useUsersStore } from '@/store/users';

const { changeDoneTask } = useUsersStore();

const props = defineProps<{
    userId: number;
    tasks: Task[]
}>()

const changeStatus = ({ taskId }: {taskId: number}): void => {
    changeDoneTask(props.userId, taskId)
}


</script>

<style lang="scss" setup>
.modal {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    &__title {
        font-size: 24px;
        font-weight: bold;
    }

    &__items {
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 100%;
    }
}
</style>