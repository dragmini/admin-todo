<template>
    <div class="user">
        <p class="user__name" @click="isOpen = true">{{ props.user.name }}</p>
        <img @click="isOpenProfile = true" class="user__profile" src="@/assets/icons/profile.svg" alt="" />
    </div>

    <VueFinalModal v-model="isOpen" class="modal" content-class="modal__content">
        <TasksModal :tasks="props.user.tasks" :user-id="user.id" />
    </VueFinalModal>

    <VueFinalModal v-model="isOpenProfile" class="modal" content-class="modal__content">
        <ProfileModal v-bind="user" @close-modal="isOpenProfile = false"/>
    </VueFinalModal>

</template>

<script lang="ts" setup>
import { User } from '@/types/user.interface'
import { ref } from 'vue'
import { VueFinalModal } from 'vue-final-modal'
import TasksModal from "@/components/TasksModal.vue"
import ProfileModal from '@/components/ProfileModal.vue';
import '@/style.scss'

const isOpen = ref(false)
const isOpenProfile = ref(false)

const props = defineProps<{
    user: User
}>()
</script>

<style lang="scss" setup>
.user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #2F83E4;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #001329;
    }

    &__name {
        color: white;
        cursor: pointer;
    }

    &__profile {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
}
</style>