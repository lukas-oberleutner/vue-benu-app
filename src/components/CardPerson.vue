<script setup lang="ts">

import Icon from '@/components/Icon.vue';
import Heading from '@/components/Heading.vue';
import Text from '@/components/Text.vue';
import { iconFacebook, iconInstagram, iconTwitter } from '@/theme/icons';
import { SIZE_MD } from '@/constants'

interface Props {
  as?: string;
  personName: string;
  personPosition: string;
  facebookLink?: string;
  instagramLink?: string;
  twitterLink?: string;
}

withDefaults(defineProps<Props>(), {
  as: 'article',
});

</script>

<template>
  <component class="x-card-person w-[240px] text-center rounded-lg shadow-card" :is="as">
      <slot name="personImage" />
      <div class="flex flex-col gap-[10px] p-[30px]">
        <Heading as="h5">{{ personName }}</Heading>
        <Text class="text-sm">{{ personPosition }}</Text>
        <ul class="flex items-center justify-center gap-[20px]">
          <li v-if="facebookLink">
            <a
              :href="facebookLink"
              :aria-label="`facebook link of ${ personName }`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon :size="SIZE_MD" class="text-primary hover:text-primaryDark ease-out duration-500">
                <span v-html="iconFacebook"></span>
              </Icon>
            </a>
          </li>
          <li v-if="instagramLink">
            <a
              :aria-label="`instagram link of ${ personName }`"
              :href="instagramLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon :size="SIZE_MD" class="text-primary hover:text-primaryDark ease-out duration-500">
                <span v-html="iconInstagram"></span>
              </Icon>
            </a>
          </li>
          <li v-if="twitterLink">
            <a
              :aria-label="`twitter link of ${ personName }`"
              :href="twitterLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon :size="SIZE_MD" class="text-primary hover:text-primaryDark ease-out duration-500">
                <span v-html="iconTwitter"></span>
              </Icon>
            </a>
          </li>
        </ul>
      </div>
  </component>
</template>
