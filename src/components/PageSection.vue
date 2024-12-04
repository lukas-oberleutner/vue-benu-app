<script setup lang="ts">
interface Props {
  as?: string;
  isHeaderHome?: boolean;
}

withDefaults(defineProps<Props>(), {
  as: 'section',
  isHeaderHome: false,
})
</script>

<template>
  <component :is="as" class="x-page-section">
    <div class="container mx-auto px-[25px]" :class="{ 'max-w-screen-xl py-[160px] lg:bg-bgImage lg:bg-no-repeat lg:bg-right-bottom': isHeaderHome, 'max-w-screen-lg': !isHeaderHome }">
        <slot />
    </div>
  </component>
</template>
