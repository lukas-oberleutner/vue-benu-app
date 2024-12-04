<script setup lang="ts">

import { withDefaults, defineProps, computed } from 'vue';
import { SIZE_SM, SIZE_MD, SIZE_LG } from '@/constants';

interface Props {
  as?: string,
  size?: string,
}

const props = withDefaults(defineProps<Props>(), {
  as: 'span',
});

const computedClass = computed(() => {
  return {
    'x-icon--sm w-[12px] h-[12px]': props.size === SIZE_SM,
    'x-icon--md w-[24px] h-[24px]': props.size === SIZE_MD,
    'x-icon--lg w-[32px] h-[32px]': props.size === SIZE_LG,
  }
});
</script>

<template>
  <component
    class="x-icon flex flex-shrink-0"
    :class="computedClass"
    :is="as"
  >
    <slot />
  </component>
</template>
