<script setup lang="ts">
interface Props {
  as?: string
}

withDefaults(defineProps<Props>(), {
  as: 'p'
})
</script>

<template>
  <component class="x-text" :is="as">
    <slot />
  </component>
</template>
