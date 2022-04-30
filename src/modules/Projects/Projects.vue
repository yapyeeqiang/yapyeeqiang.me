<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import gh from '@/api/github'
import { onMounted, ref, watchEffect } from 'vue'
import type { RepoFormat } from '@/interfaces/github'
import Card from '@/components/Card.vue'
import { formatDate } from '@/composables/useDate'
import { useLoading } from '@/composables/useLoading'
import Loading from '../../components/Loading.vue'
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/vue/outline'

const { isLoading, startLoading, stopLoading } = useLoading()
const repos = ref<RepoFormat[]>([])

const visit = (url: string | undefined) => {
    window.open(url)
}

const pageNumber = ref(1)
const totalPages = ref(0)

onMounted(async () => {
    const totalResults = await gh.getReposCount('yapyeeqiang')

    totalPages.value = Math.ceil(totalResults / 9)
})

watchEffect(async () => {
    startLoading()
    const result = await gh.queryRepos('yapyeeqiang', pageNumber.value)

    repos.value = result.map((item) => {
        return {
            ...item,
            createdAt: formatDate(item.createdAt),
            updatedAt: formatDate(item.updatedAt),
        }
    })

    stopLoading()
})
</script>

<template>
    <MainLayout>
        <div class="max-w-5xl mx-auto">
            <div class="space-y-4">
                <div class="space-y-2">
                    <h1 class="text-4xl font-semibold">Projects</h1>
                    <p class="text-gray-400 font-light italic">List of projects that I am proud of</p>
                </div>

                <Loading :is-loading="isLoading">
                    <div class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Card @click="visit(repo.url)" class="relative" v-for="repo in repos" :key="repo.id">
                                <div>
                                    <h3 class="text-gray-700 dark:text-gray-300">{{ repo.title }}</h3>
                                    <p class="text-gray-500 dark:text-gray-400 text-sm">{{ repo.description }}</p>
                                </div>

                                <div class="absolute bottom-2 right-4 flex items-center space-x-4">
                                    <!-- <div v-if="repo.projectURL" class="cursor-pointer z-10" @click="visit(repo.projectURL)">
                                        <ExternalLinkIcon class="h-4 w-4 text-gray-400 dark:text-gray-500 hover:text-gray-600" />
                                    </div> -->
                                    <div class="flex items-center space-x-1">
                                        <svg class="h-4 w-4 fill-gray-400 dark:fill-gray-500" viewBox="0 0 16 16">
                                            <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                        </svg>
                                        <span class="text-gray-400 dark:text-gray-500 text-sm">{{ repo.forks }}</span>
                                    </div>
                                    <div class="flex items-center space-x-1">
                                        <svg class="h-4 w-4 fill-gray-400 dark:fill-gray-500" viewBox="0 0 16 16">
                                            <path
                                                d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
                                            ></path>
                                        </svg>
                                        <span class="text-gray-400 dark:text-gray-500 text-sm">{{ repo.watchers }}</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div class="space-x-2 flex items-center justify-between">
                            <button v-if="pageNumber !== 1" @click.prevent="pageNumber -= 1" class="flex items-center space-x-1 text-gray-400">
                                <ArrowNarrowLeftIcon class="h-5 w-5" />
                                <span>Previous</span>
                            </button>
                            <button v-if="pageNumber < totalPages" @click.prevent="pageNumber += 1" class="flex-1 flex items-center justify-end space-x-1 text-gray-400">
                                <span>Next</span>
                                <ArrowNarrowRightIcon class="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </Loading>
            </div>
        </div>
    </MainLayout>
</template>
