import { ref, computed } from 'vue';

export function useInvestmentForm() {
  const currentStep = ref(0);
  const maxSteps = ref(3);

  const formData = ref({
    name: '',
    phone: '',
    email: '',
    birthNumber: '',
    dob: '',
    idCard: '',
    address: '',
    bankAccount: '',
    investmentAmount: 0,
    consent: false,
  });

  const nextStep = () => { if (currentStep.value < maxSteps.value - 1) currentStep.value++; };
  const prevStep = () => { if (currentStep.value > 0) currentStep.value--; };

  async function submitForm() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData.value),
      });
      if (!response.ok) throw new Error('Failed to submit');
      console.log('Data submitted:', formData.value);
    } catch (error) {
      console.error('Submission error:', error);
    }
  }

  return { currentStep, maxSteps, formData, nextStep, prevStep, submitForm };
}