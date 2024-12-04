<script setup lang="ts">

import { computed } from 'vue'
import { TYPE_SUBMIT, VARIANT_GHOST, VARIANT_ICON, VARIANT_PRIMARY, VARIANT_SECONDARY } from '@/constants'
interface Props {
  as?: string
  variant?: string;
  type?: string;
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  type: TYPE_SUBMIT,
})

const emit = defineEmits(['btnClick']);

const computedClass = computed(() => {
  return {
    'x-base-btn--primary px-[25px] py-[15px] font-bold text-white bg-primary border border-primary hover:bg-primaryDark hover:border-primaryDark': props.variant === VARIANT_PRIMARY,
    'x-base-btn--secondary px-[25px] py-[15px] font-bold text-primary border border-primary bg-transparent hover:bg-transparent hover:text-primaryDark hover:border-primaryDark': props.variant === VARIANT_SECONDARY,
    'x-base-btn--ghost text-title bg-white': props.variant === VARIANT_GHOST,
    'x-base-btn--icon text-title': props.variant === VARIANT_ICON,
  }
});

function handleClick(e: Event) {
  if (!props.isDisabled) {
    return emit('btnClick', e);
  }
}
</script>

<template>
  <component
    class="x-base-btn rounded-sm ease-out duration-500 disabled:cursor-not-allowed disabled:opacity-40"
    :class="computedClass"
    :is="as"
    :type="type"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <slot name="value" />
    <slot name="icon" />
  </component>
</template>
