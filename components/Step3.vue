<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    formData: Object,
});
const emit = defineEmits(['submit']);

const submitForm = () => {
    emit('submit'); // Odeslání formuláře
};
</script>

<template>
    <div class="step p-4 space-y-4 flex flex-col justify-center items-center">
      <h2 class="text-2xl font-semibold">Krok 3: Souhlas s podmínkami</h2>
      <form @submit.prevent="submitForm" class="max-w-sm flex flex-col gap-4">
        <div class="flex gap-3 items-center text-center">
          <input v-model="formData.agreement" type="checkbox" id="agreement" required />
          <label for="agreement" class="block text-lg">Souhlasím s podmínkami</label>
        </div>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded">Odeslat</button>
      </form>
    </div>
</template>