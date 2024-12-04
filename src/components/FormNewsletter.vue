<script setup lang="ts">

import { ref } from 'vue';
import Status from '@/components/Status.vue';
import BaseButton from '@/components/BaseButton.vue';
import { TYPE_EMAIL, TYPE_SUBMIT, VARIANT_PRIMARY } from '@/constants'
import BaseInput from '@/components/BaseInput.vue'

const email = ref<string>('');
const errorMessage = ref<string | undefined>();
const successMessage = ref<string | undefined>();
const isSubmitting = ref<boolean>(false);

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const showSuccess = () => {
  successMessage.value = 'Thank you for subscribing to our newsletter!';
  errorMessage.value = undefined;
};

const showError = () => {
  errorMessage.value = 'Please enter a valid email address.';
  successMessage.value = undefined;
};

const handleSubmit = async () => {
  errorMessage.value = '';
  successMessage.value = '';

  if (!validateEmail(email.value)) {
    showError();
    return;
  }

  isSubmitting.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    showSuccess();
    email.value = '';
  } catch (error) {
    showError();
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <form class="max-w-[571px] mx-auto " @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-[10px] sm:flex-row sm:gap-0 justify-center">
      <BaseInput
        :id="email"
        :type="TYPE_EMAIL"
        :placeholder="'Your Email'"
        aria-label="Enter your email"
        v-model="email"
      />
      <BaseButton
        class="px-[22px] sm:rounded-l-none"
        :type="TYPE_SUBMIT"
        :variant="VARIANT_PRIMARY"
        @btnClick="handleSubmit"
      >
        <template #value>
          Subscribe
        </template>
      </BaseButton>
    </div>
    <Status class="flex m-[10px] min-h-[24px]"
      :errorMessage="errorMessage"
      :successMessage="successMessage"
  />
  </form>
</template>
