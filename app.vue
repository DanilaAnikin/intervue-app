<template>
  <div class="app">
    <h1 class="text-3xl font-bold p-3 flex justify-center">Pravidelná Investice</h1>

    <!-- Zobrazení správného kroku podle aktuálního stavu -->
    <Step1 v-if="currentStep === 'step1'" :formData="formData" @next="goToStep" />
    <Step2 v-if="currentStep === 'step2'" :formData="formData" @next="goToStep" />
    <Step3 v-if="currentStep === 'step3'" :formData="formData" @submit="submitForm" />
    <ThankingMessage v-if="currentStep === 'finished'" />

  </div>
</template>

<script setup>
import './assets/main.css';
import { ref } from 'vue';
import Step1 from './components/Step1.vue';
import Step2 from './components/Step2.vue';
import Step3 from './components/Step3.vue';

const formData = ref({
  firstName: '',
  lastName: '',
  investmentAmount: '',
  bankAccount: '',
  agreement: false,
});

const currentStep = ref('step1'); // Výchozí krok formuláře

// Funkce pro přechod mezi kroky
const goToStep = (step) => {
  currentStep.value = step;
};

// Funkce pro odeslání formuláře (např. API)
const submitForm = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value), // Data z formuláře
    });

    if (response.ok) {
      console.log('Data úspěšně odeslána');
      currentStep.value = 'finished';
    } else {
      console.error('Chyba při odesílání dat');
    }
  } catch (error) {
    console.error('Chyba při odesílání formuláře:', error);
  }
};
</script>