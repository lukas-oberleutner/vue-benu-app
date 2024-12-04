<script setup lang="ts">

import { ref } from 'vue'

import { VARIANT_PRIMARY, VARIANT_SECONDARY } from '@/constants'
import { iconArrowRightLight, iconBlackboard, iconTelescope } from '@/theme/icons'

import BaseHeader from '@/components/PageHeader.vue'
import BaseFooter from '@/components/PageFooter.vue'
import Icon from '@/components/Icon.vue'
import Heading from '@/components/Heading.vue'
import Text from '@/components/Text.vue'
import Card from '@/components/Card.vue'
import CardPerson from '@/components/CardPerson.vue'
import FormNewsletter from '@/components/FormNewsletter.vue'
import PageSection from '@/components/PageSection.vue'
import CardCarousel from '@/components/CardCarousel.vue'
import BaseButton from '@/components/BaseButton.vue'
import type { ITeamMember } from '@/types'

const imageSrc = (imageName: string) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
}

const onBtnClick = () => {
  console.log('click test');
}

// Data
const teamMembers = ref<ITeamMember[]>([
  {
    name: 'John Doe',
    position: 'Developer',
    image: 'john-doe.png',
    socials: {
      twitter: 'https://twitter.com/johndoe',
      facebook: 'https://facebook.com/johndoe',
      instagram: 'https://instagram.com/johndoe',
    },
  },
  {
    name: 'Mark Smith',
    position: 'Designer',
    image: 'mark-smith.png',
    socials: {
      twitter: 'https://twitter.com/janesmith',
      facebook: undefined,
      instagram: 'https://instagram.com/janesmith',
    },
  },
  {
    name: 'Alice Brown',
    position: 'Project Manager',
    image: 'alice-brown.png',
    socials: {
      twitter: 'https://twitter.com/emilybrown',
      facebook: 'https://facebook.com/emilybrown',
      instagram: 'https://instagram.com/emilybrown',
    },
  },
  {
    name: 'Bob Johnson',
    position: 'QA Engineer',
    image: undefined,
    socials: {
      twitter: undefined,
      facebook: undefined,
      instagram: 'https://instagram.com/michaeljohnson',
    },
  },
  {
    name: 'Sarah Davis',
    position: 'Content Writer',
    image: 'sarah-davis.png',
    socials: {
      twitter: undefined,
      facebook: 'https://facebook.com/sarahdavis',
      instagram: 'https://instagram.com/sarahdavis',
    },
  },
  {
    name: 'Chris Lee',
    position: 'UX Designer',
    image: undefined,
    socials: {
      twitter: 'https://twitter.com/chrislee',
      facebook: 'https://facebook.com/chrislee',
      instagram: undefined,
    },
  },
]);
</script>

<template>
  <div class="relative">
    <!-- Header -->
    <BaseHeader />

    <!-- Content -->
    <main>
      <PageSection class="bg-bgColored mt-[91px]" :isHeaderHome="true">
        <div>
          <div class="flex flex-col gap-[30px] text-center lg:px-[] xl:pl-[122px] lg:text-left">
            <Heading as="h6" class="break-words">Welcome</Heading>
            <Heading as="h1" class="break-words">Best Learning<br /> Opportunities</Heading>
            <Text class="text-lg">
              Our goal is to make online<br />
              education work for everyone
            </Text>
            <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-[10px]">
              <BaseButton
                class="px-[40px] capitalize"
                :variant="VARIANT_PRIMARY"
                @btnClick="onBtnClick"
              >
                <template #value>Join us</template>
              </BaseButton>
              <BaseButton
                class="px-[40px] capitalize"
                :variant="VARIANT_SECONDARY"
                @btnClick="onBtnClick"
              >
                <template #value>Learn more</template>
              </BaseButton>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection class="py-[160px]">
        <div  class="flex flex-col md:flex-row gap-[35px]">
          <div class="flex flex-col gap-[35px] relative">
            <Heading as="h2" class="x-decorator--lg pt-[35px]">Approdable Packages</Heading>
            <Text>
              Problems trying to resolve the conflict between<br />
              the two major realms of Classical physics:<br />
              Newtonian mechanics
            </Text>
            <a href="/" class="font-bold text-primary border-none bg-transparent capitalize flex gap-[10px] items-center group">
              <span>Learn more</span>
              <Icon class="w-[9px] h-[16px] group-hover:animate-moveRight">
                <span v-html="iconArrowRightLight"></span>
              </Icon>
            </a>
          </div>
          <div class="flex flex-col sm:flex-row gap-[30px]">
            <Card as="article" title="Certified Teacher" description="The gradual accumulation of information about">
              <template #icon>
                <span v-html="iconBlackboard"></span>
              </template>
            </Card>
            <Card as="article" title="Expert instruction" description="The gradual accumulation of information about">
              <template #icon>
                <span v-html="iconTelescope"></span>
              </template>
            </Card>
          </div>
        </div>
      </PageSection>

      <PageSection class="py-[112px]">
        <div class="flex flex-col gap-[10px] mb-[112px]">
          <Heading as="h6">Team</Heading>
          <Heading as="h3">Get Quality Education</Heading>
          <Text>
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanics
          </Text>
        </div>
        <div class="lg:-mx-[15px] relative">
          <CardCarousel :itemCount="teamMembers.length">
            <div v-for="(person, index) in teamMembers" :key="index">
              <CardPerson
                :person-name="person.name"
                :person-position="person.position"
                :facebookLink="person.socials.facebook"
                :instagramLink="person.socials.instagram"
                :twitterLink="person.socials.twitter"
              >
                <template #personImage>
                  <img class="aspect-square object-cover w-full h-full rounded-t-lg" :src="person.image ? imageSrc(person.image) : imageSrc('placeholder.svg')" :alt="person.name" loading="lazy" />
                </template>
              </CardPerson>
            </div>

          </CardCarousel>
        </div>
      </PageSection>

      <PageSection class="bg-bgColored py-[160px] text-center">
          <div class="flex flex-col gap-[10px] mb-[80px]">
            <Heading as="h6">Newsletter</Heading>
            <Heading as="h3">Watch our Courses</Heading>
            <Text>
              Problems trying to resolve the conflict between<br />
              the two major realms of Classical physics: Newtonian mechanics
            </Text>
          </div>
          <FormNewsletter />
      </PageSection>
    </main>

    <!-- Footer -->
    <BaseFooter />

  </div>
</template>
