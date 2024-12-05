<script setup lang="ts">

import { ref } from 'vue';

import { SIZE_MD, SIZE_SM, VARIANT_ICON, VARIANT_PRIMARY } from '@/constants';
import { iconArrowRight, iconClose, iconMenu } from '@/theme/icons';

import Icon from '@/components/Icon.vue';
import PageSection from '@/components/PageSection.vue';
import BaseButton from '@/components/BaseButton.vue';

const isNavigationOpen = ref(false);

const toggleNavigation = () => {
  isNavigationOpen.value = !isNavigationOpen.value;
};

const onBtnClick = () => {
  console.log('click test');
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-10">
    <PageSection class="bg-bgColored py-[15px]">
      <div class="h-[61px] flex items-center justify-between relative">
        <div class="text-xl font-bold lg:grow-0">
          <a href="#" class="p-[10px] text-title hover:text-title">Brandname</a>
        </div>
        <BaseButton
          class="!p-[15px] lg:hidden"
          aria-label="Toggle navigation menu"
          :variant="VARIANT_ICON"
          :aria-expanded="isNavigationOpen"
          @btnClick="toggleNavigation"
        >
          <template #icon>
            <Icon v-if="isNavigationOpen" :size="SIZE_MD">
              <span v-html="iconClose"></span>
            </Icon>
            <Icon v-if="!isNavigationOpen" :size="SIZE_MD">
              <span v-html="iconMenu"></span>
            </Icon>
          </template>

        </BaseButton>
        <nav
          class="w-full lg:max-w-[815px] h-lvh bg-white p-[25px] lg:p-0 lg:static lg:flex lg:grow lg:justify-between lg:h-auto lg:bg-transparent lg:items-center lg:w-auto lg:space-x-4"
          :class="{'fixed inset-0 top-[91px] bg-white': isNavigationOpen, 'hidden': !isNavigationOpen}"
        >
          <ul class="flex flex-col lg:flex-row gap-0px font-bold">
            <li><RouterLink class="block p-[10px]" to="/">Home</RouterLink></li>
            <li><RouterLink class="block p-[10px]" to="/">Product</RouterLink></li>
            <li><RouterLink class="block p-[10px]" to="/">Pricing</RouterLink></li>
            <li><RouterLink class="block p-[10px]" to="/">Contact</RouterLink></li>
          </ul>
          <div class="flex flex-col lg:flex-row gap-[10px] mt-[10px] pt-[10px] border-t border-border lg:border-none lg:m-0 lg:p-0 lg:items-center">
            <a href="#" class="block p-[10px] text-primary font-bold">Login</a>
            <BaseButton
              class="flex gap-[15px] items-center justify-between uppercase"
              aria-label="Join us"
              :variant="VARIANT_PRIMARY"
              @btnClick="onBtnClick"
            >
              <template #value>
                <span>Join us</span>
              </template>
              <template #icon>
                <Icon :size="SIZE_SM">
                  <span v-html="iconArrowRight"></span>
                </Icon>
              </template>
            </BaseButton>
          </div>
        </nav>
      </div>
    </PageSection>
  </header>
</template>
