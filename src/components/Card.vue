<script setup lang="ts">

import Icon from '@/components/Icon.vue';
import Heading from '@/components/Heading.vue';
import Text from '@/components/Text.vue';
import { SIZE_LG } from '@/constants'

interface Props {
  as?: string;
  title: string;
  description: string;
}

withDefaults(defineProps<Props>(), {
  as: 'div',
})
</script>

<template>
  <component class="x-card lg:max-w-[249px] px-[40px] py-[35px] rounded-lg shadow-card flex flex-col gap-[24px]" :is="as">
    <span class="w-[70px] px-[19px] py-[22px] bg-primary rounded-lg" aria-hidden="true">
      <Icon :size="SIZE_LG" class="text-white">
        <slot name="icon" />
      </Icon>
    </span>
    <Heading :as="'h5'">{{ title }}</Heading>
    <Text class="x-decorator--sm">
      {{ description }}
    </Text>
  </component>
</template>
