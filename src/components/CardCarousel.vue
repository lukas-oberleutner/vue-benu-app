<script lang="ts" setup>

import { ref, computed, onMounted } from 'vue';
import { iconArrowLeft, iconArrowRight } from '@/theme/icons';
import Icon from '@/components/Icon.vue';
import BaseButton from '@/components/BaseButton.vue';
import { SIZE_SM, VARIANT_GHOST } from '@/constants'

const props = defineProps<{ itemCount: number; }>();

const currentIndex = ref(0);
const visibleItems = ref(4);
const tileWidth = 241;
const gap = 30;

const totalItemWidth = tileWidth + gap;
const maxIndex = computed(() => props.itemCount - visibleItems.value);

const next = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value += 1;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};

const updateVisibleItems = () => {
  const width = window.innerWidth;
  if (width >= 1050) {
    visibleItems.value = 4;
  } else if (width >= 768) {
    visibleItems.value = 3;
  } else if (width >= 480) {
    visibleItems.value = 2;
  } else {
    visibleItems.value = 1;
  }
};

const handleKeydown = (event) => {
  if (event.key === "ArrowLeft") prev();
  if (event.key === "ArrowRight") next();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener('resize', updateVisibleItems);
  updateVisibleItems();
});

</script>

<template>
  <div class="overflow-hidden w-full py-[30px] px-[15px]">
    <div
      class="flex transition-transform duration-300 ease-in-out gap-[30px]"
      :style="{ transform: `translateX(-${currentIndex * totalItemWidth}px)` }"
    >
      <slot />
    </div>
    <BaseButton
      class="flex justify-center absolute top-1/2 left-[5px] transform -translate-y-1/2 text-title shadow-card !rounded-full p-[15px]"
      aria-label="Previous slide"
      :variant="VARIANT_GHOST"
      :disabled="currentIndex === 0"
      @btnClick="prev"
    >
      <template #icon>
        <Icon :size="SIZE_SM">
          <span v-html="iconArrowLeft"></span>
        </Icon>
      </template>
    </BaseButton>
    <BaseButton
      class="flex justify-center absolute top-1/2 right-[5px] transform -translate-y-1/2 text-title shadow-card !rounded-full p-[15px]"
      aria-label="Next slide"
      :variant="VARIANT_GHOST"
      :disabled="currentIndex === maxIndex"
      @btnClick="next"
    >
      <template #icon>
        <Icon :size="SIZE_SM">
          <span v-html="iconArrowRight"></span>
        </Icon>
      </template>
    </BaseButton>
  </div>
</template>
