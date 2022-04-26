<script setup lang="ts">
import { PencilIcon, VolumeUpIcon, VideoCameraIcon, BriefcaseIcon, UserGroupIcon, MenuIcon, SunIcon, MoonIcon } from '@heroicons/vue/outline'
import { markRaw, ref } from 'vue'
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/assets'
import ThemeToggle from '../components/ThemeToggle.vue'

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
    <nav class="flex items-center justify-between px-10 py-4 dark:bg-black">
        <div>
            <img class="h-20 w-20 hidden dark:block" src="@/assets/logo-dark.png" alt="Logo" />
            <img class="h-20 w-20 dark:hidden" src="@/assets/logo-light.png" alt="Logo" />
        </div>

        <MenuIcon class="md:hidden h-6 w-6 text-gray-400 hover:text-black transition-all cursor-pointer" />

        <ul class="hidden md:flex items-center space-x-8">
            <li v-for="(menu, index) in navigationMenus" :key="index">
                <router-link :to="menu.to" class="flex items-center space-x-2 group transition-all">
                    <component :is="menu.icon" class="h-4 w-4 text-gray-600 stroke-1 group-hover:stroke-2 group-hover:text-black transition-all" />
                    <span class="hidden lg:inline-flex text-sm font-normal text-gray-600 group-hover:text-black transition-all">{{ menu.name }}</span>
                </router-link>
            </li>
            <li v-for="menu in socialMenus" :key="menu.name">
                <a :href="menu.url" target="blank">
                    <component :is="menu.icon" />
                </a>
            </li>

            <ThemeToggle />
        </ul>
    </nav>

    <slot />
</template>
