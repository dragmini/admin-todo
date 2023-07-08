<template>
    <div class="payments">
        <h2 class="payments__title">Список платежей</h2>
        <div class="payments__list">
            <PaymentsCard v-for="payment in payments" :key="payment.id" :payment="payment" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import PaymentsCard from '@/components/PaymentsCard.vue';
import { onMounted, computed } from 'vue'
import { usePaymentsStore } from '@/store/payments';

const paymentsStore = usePaymentsStore();
const payments = computed(() => paymentsStore.payments);

onMounted(() => {
    paymentsStore.fetchPayments();
});

</script>

<style lang="scss" setup>
.payments {
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