<template>
    <aside class="sidebar">
        <h2 class="sidebar__title">Меню</h2>
        <div class="sidebar__actions">
            <router-link class="sidebar__link" to="/users">Пользователи</router-link>
            <router-link class="sidebar__link" to="/payments">Платежи</router-link>
        </div>
    </aside>
</template>

<style lang="scss" setup>
.sidebar {
    background-color: #001329;
    padding: 40px;

    &__title {
        color: white;
    }

    &__link {
        color: white;
        text-decoration: none;
        font-size: 18px;
    }

    &__link:hover {
       color: #2F83E4;
    }

    &__actions {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 13px;
    }
}
</style>