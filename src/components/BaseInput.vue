<script setup lang="ts">

import { defineEmits, defineProps, withDefaults } from 'vue'
import { TYPE_TEXT } from '@/constants'
interface Props {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  modelValue: string;
}

withDefaults(defineProps<Props>(), {
  type: TYPE_TEXT,
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value);
}
</script>

<template>
  <div class="x-base-input w-full">
    <label v-if="label" :for="id" class="x-label">{{ label }}</label>
    <input
      class="x-input w-full px-[20px] py-[15px] text-text border border-border bg-bgInput rounded-sm sm:rounded-r-none"
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onInput"
    />
  </div>
</template>
