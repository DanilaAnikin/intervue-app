<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    formData: Object,
});
const emit = defineEmits(['next']);

const nextStep = () => {
    emit('next', 'step2'); // Přepne na další krok
};
</script>

<template>
    <div class="step p-4 space-y-4 flex flex-col justify-center items-center">
      <h2 class="text-2xl font-semibold">Krok 1: Osobní údaje</h2>
      <form @submit.prevent="nextStep" class="max-w-sm flex flex-col gap-4">
        <div>
          <label for="firstName" class="block text-lg">Jméno</label>
          <input v-model="formData.firstName" class="border p-2 w-full" type="text" id="firstName" placeholder="Jméno" required />
        </div>
        <div>
          <label for="lastName" class="block text-lg">Příjmení</label>
          <input v-model="formData.lastName" class="border p-2 w-full" type="text" id="lastName" placeholder="Příjmení" required />
        </div>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded">Pokračovat</button>
      </form>
    </div>
</template>