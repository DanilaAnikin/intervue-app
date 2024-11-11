<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    formData: Object,
});
const emit = defineEmits(['next']);

const nextStep = () => {
    emit('next', 'step3'); // Přepne na další krok
};
</script>

<template>
    <div class="step p-4 space-y-4 flex flex-col justify-center items-center">
      <h2 class="text-2xl font-semibold">Krok 2: Parametry investice</h2>
      <form @submit.prevent="nextStep" class="max-w-sm flex flex-col gap-4">
        <div>
          <label for="investmentAmount" class="block text-lg">Výše investice (Kč)</label>
          <input v-model="formData.investmentAmount" class="border p-2 w-full" type="number" id="investmentAmount" placeholder="Měsíčně (Kč)" required />
        </div>
        <div>
          <label for="bankAccount" class="block text-lg">Číslo bankovního účtu</label>
          <input v-model="formData.bankAccount" class="border p-2 w-full" type="text" id="bankAccount" placeholder="Číslo účtu" required />
        </div>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded">Pokračovat</button>
      </form>
    </div>
</template>