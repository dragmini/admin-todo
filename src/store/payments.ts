import { defineStore } from 'pinia';
import paymentsData from '@/data/payments.json';
import { Payment } from '@/types/payments.interface';

export const usePaymentsStore = defineStore('payments', {
  state: () => ({
    payments: [] as Payment[],
  }),
  actions: {
    fetchPayments() {
      this.payments = paymentsData.payments;
    },
  },
});