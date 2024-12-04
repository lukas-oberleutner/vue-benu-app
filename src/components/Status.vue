<script setup lang="ts">

import { computed } from 'vue';

interface Props {
  errorMessage?: string;
  successMessage?: string;
}

const props = defineProps<Props>();

// Status
const status = computed(() => {
  if (props.errorMessage) {
    return {
      message: props.errorMessage,
      wrapperClasses: 'x-status-message--error text-textError',
    };
  }
  if (props.successMessage) {
    return {
      message: props.successMessage,
      wrapperClasses: 'x-status-message--success text-textSuccess',
    };
  }
  return {
    message: undefined,
    wrapperClasses: undefined,
  };
});
</script>

<template>
  <div class="x-status-message" :class="status.wrapperClasses">
    <span>{{ status.message }}</span>
  </div>
</template>
