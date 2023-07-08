<template>
    <div class="profile">
        <p class="profile__title">Профиль</p>
        <form class="profile__form" @submit.prevent="updateProfile">
            <InputProfile v-model="form.email" placeholder="Напишите Email..." label="Email" />
            <InputProfile v-model="form.phone" placeholder="Напишите телефон..." label="Телефон" />
            <InputProfile v-model="form.name" placeholder="Напишите имя..." label="Имя" />
            <ButtonUI class="profile__save">Сохранить</ButtonUI>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import InputProfile from '@/components/InputProfile.vue';
import { User } from "@/types/user.interface"
import ButtonUI from "@/components/ButtonUI.vue";
import { useUsersStore } from "@/store/users";

const { updateProfileInfo } = useUsersStore();


const props = withDefaults(defineProps<User>(), {
    name: '',
    email: '',
    phone: ''
})

const emit = defineEmits(['close-modal']);

const form = reactive({
    id: props.id,
    email: props.email,
    name: props.name,
    phone: props.phone
})

const updateProfile = () => {
    updateProfileInfo(form)
    emit('close-modal')
}

</script>

<style setup lang="scss">
.profile {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
    }

    &__title {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
    }

    &__save {
        align-self: center;
        margin-top: 20px;
    }
}
</style>