<script setup lang="ts">

import { SIZE_MD } from '@/constants';
import {
  iconEmail,
  iconFacebook,
  iconInstagram,
  iconLocation,
  iconPhone,
  iconTwitter
} from '@/theme/icons';

import PageSection from '@/components/PageSection.vue';
import Icon from '@/components/Icon.vue';
import Heading from '@/components/Heading.vue';
</script>

<template>
  <footer>
    <PageSection class="py-[50px]">
      <div class="flex flex-wrap gap-[30px] justify-between">
        <div>
          <Heading as="h5" class="mb-[20px]">Company Info</Heading>
          <ul class="flex flex-col gap-[10px] font-bold">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Carrier</a></li>
            <li><a href="/">We are hiring</a></li>
            <li><a href="/">Blog</a></li>
          </ul>
        </div>
        <div>
          <Heading as="h5" class="mb-[20px]">Legal</Heading>
          <ul class="flex flex-col gap-[10px] font-bold">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Carrier</a></li>
            <li><a href="/">We are hiring</a></li>
            <li><a href="/">Blog</a></li>
          </ul>
        </div>
        <div>
          <Heading as="h5" class="mb-[20px]">Features</Heading>
          <ul class="flex flex-col gap-[10px] font-bold">
            <li><a href="/">Business Marketing</a></li>
            <li><a href="/">User Analytic</a></li>
            <li><a href="/">Live Chat</a></li>
            <li><a href="/">Unlimited Support</a></li>
          </ul>
        </div>
        <div>
          <Heading as="h5" class="mb-[20px]">Resources</Heading>
          <ul class="flex flex-col gap-[10px] font-bold">
            <li><a href="/">IOS & Android</a></li>
            <li><a href="/">Watch a Demo</a></li>
            <li><a href="/">Customers</a></li>
            <li><a href="/">API</a></li>
          </ul>
        </div>
        <div>
          <Heading as="h5" class="mb-[20px]">Get In Touch</Heading>
          <ul class="flex flex-col gap-[10px] font-bold">
            <li>
              <a class="flex gap-[10px] items-center" href="tel:+4805550103">
                <Icon :size="SIZE_MD" class="text-primary">
                  <span v-html="iconPhone"></span>
                </Icon>
                <span>(480) 555-0103</span>
              </a>
            </li>
            <li>
              <p class="flex gap-[10px] items-center">
                <Icon :size="SIZE_MD" class="!h-[30px] text-primary">
                  <span v-html="iconLocation"></span>
                </Icon>
                <span>4517 Washington Ave. Manchester,<br /> Kentucky 39495</span>
              </p>
            </li>
            <li>
              <a class="flex gap-[10px] items-center" href="mailto:debra.holt@example.com">
                <Icon :size="SIZE_MD" class="text-primary">
                  <span v-html="iconEmail"></span>
                </Icon>
                <span>debra.holt@example.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </PageSection>

    <PageSection class="bg-bgFooter py-[25px]">
      <div class="flex gap-[20px] items-center justify-between">
        <p class="font-bold">Made With Love By Figmaland All Right Reserved</p>
        <ul class="flex items-center justify-center gap-[20px]">
          <li>
            <a href="/" aria-label="Facebook link">
              <Icon :size="SIZE_MD" class="text-primary hover:text-primaryDark ease-out duration-500">
                <span v-html="iconFacebook"></span>
              </Icon>
            </a>
          </li>
          <li>
            <a href="/" aria-label="Instagram link">
              <Icon :size="SIZE_MD" class="text-primary hover:text-primaryDark ease-out duration-500">
                <span v-html="iconInstagram"></span>
              </Icon>
            </a>
          </li>
          <li>
            <a href="/" aria-label="Twitter link">
              <Icon :size="SIZE_MD" class="text-primary hover:text-primaryDark ease-out duration-500">
                <span v-html="iconTwitter"></span>
              </Icon>
            </a>
          </li>
        </ul>
      </div>
    </PageSection>

  </footer>
</template>
