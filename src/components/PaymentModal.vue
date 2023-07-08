<template>
    <div class="payment">
        <p class="payment__title">Платеж №{{ props.id }}</p>
        <div class="payment__body">
            <p>{{ props.user.name }}</p>
            <p>{{ props.user.email }}</p>
            <p>{{ props.user.phone }}</p>
            <p>{{ props.sum }}</p>
            <p>{{ props.date }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Payment } from '@/types/payments.interface';


const props = defineProps<Payment>()

</script>

<style lang="scss" setup>
.payment {
    &__title {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
    }

    &__body {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }
}
</style>