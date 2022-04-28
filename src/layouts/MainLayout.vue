<script setup lang="ts">
import { PencilIcon, VolumeUpIcon, VideoCameraIcon, BriefcaseIcon, UserGroupIcon, MenuIcon, SunIcon, MoonIcon } from '@heroicons/vue/outline'
import { markRaw, ref } from 'vue'
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/assets'
import ThemeToggle from '../components/ThemeToggle.vue'
import Slideover from '../components/Slideover.vue'
import { useTheme } from '@/composables/useTheme'

const navigationMenus = ref([
    {
        name: 'Blogs',
        to: '/blogs',
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

// Slideover
const open = ref(false)

const toggleOpen = (value: boolean) => {
    open.value = value
}

// Theme toggle

const { theme, toggleTheme } = useTheme()
</script>

<template>
    <div class="flex flex-col px-9 py-3 min-h-screen">
        <header class="flex items-center justify-between">
            <div class="h-20 w-20">
                <router-link to="/">
                    <img class="hidden dark:inline-block" src="@/assets/logo-dark.png" alt="Logo" />
                    <img class="inline-block dark:hidden" src="@/assets/logo-light.png" alt="Logo" />
                </router-link>
            </div>

            <nav>
                <MenuIcon @click="toggleOpen(true)" class="md:hidden h-6 w-6 text-gray-400 hover:text-black transition-all cursor-pointer" />

                <Slideover :open="open" @toggle-open="toggleOpen">
                    <ul class="flex flex-col items-start space-y-8 px-10">
                        <li v-for="(menu, index) in navigationMenus" :key="index">
                            <router-link :to="menu.to" class="flex items-center space-x-2 group transition-all">
                                <component :is="menu.icon" class="h-4 w-4 text-gray-600 stroke-1 group-hover:stroke-2 group-hover:text-black transition-all dark:text-gray-400 dark:stroke-2 dark:group-hover:text-white" />
                                <span class="inline-flex text-sm font-light text-gray-600 group-hover:text-black transition-all dark:text-gray-400 dark:group-hover:text-white">{{ menu.name }}</span>
                            </router-link>
                        </li>
                        <div class="flex space-x-4">
                            <li v-for="menu in socialMenus" :key="menu.name">
                                <a :href="menu.url" target="blank">
                                    <component :is="menu.icon" />
                                </a>
                            </li>
                        </div>
                    </ul>
                    <ThemeToggle class="ml-10" :theme="theme" @toggle-theme="toggleTheme" />
                </Slideover>

                <ul class="hidden md:flex items-center space-x-8">
                    <li v-for="(menu, index) in navigationMenus" :key="index">
                        <router-link :to="menu.to" class="flex items-center space-x-2 group transition-all">
                            <component :is="menu.icon" class="h-4 w-4 text-gray-600 stroke-1 group-hover:stroke-2 group-hover:text-black transition-all dark:text-gray-400 dark:stroke-2 dark:group-hover:text-white" />
                            <span class="hidden lg:inline-flex text-sm font-light text-gray-600 group-hover:text-black transition-all dark:text-gray-400 dark:group-hover:text-white">{{ menu.name }}</span>
                        </router-link>
                    </li>
                    <li v-for="menu in socialMenus" :key="menu.name">
                        <a :href="menu.url" target="blank">
                            <component :is="menu.icon" />
                        </a>
                    </li>

                    <ThemeToggle :theme="theme" @toggle-theme="toggleTheme" />
                </ul>
            </nav>
        </header>

        <main class="flex-1 px-5 py-10">
            <slot />
        </main>

        <footer class="flex justify-center pb-2">
            <small class="text-gray-400 text-xs font-light">Designed & Built by Yap Yee Qiang</small>
        </footer>
    </div>
</template>
