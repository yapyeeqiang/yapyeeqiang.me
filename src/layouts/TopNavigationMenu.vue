<script setup lang="ts">
import { PencilIcon, VolumeUpIcon, VideoCameraIcon, BriefcaseIcon, UserGroupIcon, MenuIcon } from '@heroicons/vue/outline'
import { markRaw, ref } from 'vue'
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/assets'
import { Dialog, DialogOverlay, DialogTitle, DialogDescription } from '@headlessui/vue'

const isOpen = ref(true)

function setIsOpen(value: boolean) {
    isOpen.value = value
}

const navigationMenus = ref([
    {
        name: 'Blog',
        to: '/blog',
        icon: markRaw(PencilIcon),
    },
    {
        name: 'Talks',
        to: '/talks',
        icon: markRaw(VolumeUpIcon),
    },
    {
        name: 'Streams',
        to: '/streams',
        icon: markRaw(VideoCameraIcon),
    },
    {
        name: 'Projects',
        to: '/projects',
        icon: markRaw(BriefcaseIcon),
    },
    {
        name: 'Community',
        to: '/community',
        icon: markRaw(UserGroupIcon),
    },
])

const socialMenus = ref([
    {
        name: 'Instagram',
        url: 'https://instagram.com/yapyeeqiang',
        icon: markRaw(InstagramIcon),
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/yapyeeqiang',
        icon: markRaw(TwitterIcon),
    },
    {
        name: 'GitHub',
        url: 'https://github.com/yapyeeqiang',
        icon: markRaw(GitHubIcon),
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/yapyeeqiang',
        icon: markRaw(LinkedInIcon),
    },
])
</script>

<template>
    <nav class="flex items-center justify-between px-10 py-4">
        <div>
            <span class="signature">Yap Yee Qiang</span>
            <img class="h-16" src="@/assets/qiang-logo.svg" alt="My Logo" />
        </div>

        <MenuIcon class="md:hidden h-6 w-6 text-gray-400 hover:text-black transition-all cursor-pointer" />

        <ul class="hidden md:flex items-center space-x-8">
            <li v-for="(menu, index) in navigationMenus" :key="index">
                <router-link :to="menu.to" class="flex items-center space-x-2 group">
                    <component :is="menu.icon" class="h-4 w-4 lg:h-5 lg:w-5 text-gray-600 stroke-1 group-hover:stroke-2 group-hover:text-black transition-all" />
                    <span class="md:text-sm lg:text-base font-normal text-gray-600 group-hover:text-black transition-all">{{ menu.name }}</span>
                </router-link>
            </li>
            <li v-for="menu in socialMenus" :key="menu.name">
                <a :href="menu.url" target="blank">
                    <component :is="menu.icon" />
                </a>
            </li>
        </ul>
    </nav>

    <slot />
</template>
