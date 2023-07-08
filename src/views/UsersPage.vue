<template>
    <div class="users">
        <h2 class="users__title">Список пользователей</h2>
        <div class="users__list">
            <UserCard v-for="user in users" :key="user.id" :user="user" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import UserCard from "@/components/UserCard.vue";
import { onMounted, computed } from 'vue'
import { useUsersStore } from '@/store/users';

const usersStore = useUsersStore();
const users = computed(() => usersStore.users);

onMounted(() => {
    usersStore.fetchUsers();
});

</script>

<style lang="scss" setup>
.users {
    padding: 20px;

    &__title {
        color: white;
    }

    &__list {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>