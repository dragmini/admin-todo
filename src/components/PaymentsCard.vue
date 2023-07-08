<template>
    <div class="row" @click="isOpenPayment = true">
        <span class="row__item">{{ props.payment.id }}</span>
        <div class="row__info">
            <p class="row__item">{{ props.payment.sum }}</p>
            <p class="row__item">{{ props.payment.date }}</p>
        </div>
    </div>
    <VueFinalModal v-model="isOpenPayment" class="modal" content-class="modal__content">
        <PaymentModal v-bind="payment" />
    </VueFinalModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Payment } from '@/types/payments.interface';
import PaymentModal from './PaymentModal.vue';
import '@/style.scss'
import { VueFinalModal } from 'vue-final-modal'

const props  = defineProps<{
    payment: Payment
}>()

const isOpenPayment = ref(false)
</script>

<style lang="scss" setup>
.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #fff;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #001329;
    }

    &__info {
        display: flex;
        gap: 20px;
    }

    &__item {
        color: white;
    }
}
</style>