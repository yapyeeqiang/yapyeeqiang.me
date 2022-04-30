<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import notion from '@/api/notion'
import { onMounted, ref } from 'vue'
import type { BlogPreview } from '@/interfaces/notion'
import { formatDate } from '@/composables/useDate'
import { useLoading } from '@/composables/useLoading'
import Loading from '@/components/Loading.vue'
import BlogCard from './components/BlogCard.vue'

const isComingSoon = ref(true)
const blogs = ref<BlogPreview[]>([])

const { isLoading, startLoading, stopLoading } = useLoading()

onMounted(async () => {
    if (isComingSoon.value) return

    startLoading()

    blogs.value = []
    const pages = await notion.getDatabase()

    for (let page of pages) {
        const authorID = page.created_by.id

        const user = await notion.getPageAuthor(authorID)

        blogs.value.push({
            id: page.id,
            title: page.properties.Name.title[0].plain_text,
            cover: page.cover?.external.url,
            category: page.properties.Category.multi_select[0].name,
            description: page.properties.Description.rich_text[0].plain_text,
            author: {
                name: user.name,
                imageURL: user.avatar_url,
            },
            createdAt: formatDate(page.created_time),
        })
    }

    stopLoading()
})
</script>

<template>
    <MainLayout>
        <div class="max-w-5xl mx-auto">
            <div v-if="isComingSoon" class="flex flex-col items-center justify-center py-32 space-y-10">
                <div class="flex flex-col items-center space-y-4">
                    <h1 class="text-4xl font-semibold">Coming soon.</h1>
                    <p class="text-gray-400 font-light italic text-center">Stay tuned for this amazing blogs section!</p>
                </div>

                <div class="animate-pulse hover:animate-none">
                    <router-link class="hover:text-zinc-600 dark:text-gray-50" to="/">Go back home &rarr;</router-link>
                </div>
            </div>

            <div v-else class="flex flex-col items-start space-y-10">
                <h1 class="text-4xl font-semibold">Blogs</h1>

                <Loading :is-loading="isLoading">
                    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        <div v-for="blog in blogs" :key="blog.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <BlogCard :blog="blog" />
                        </div>
                    </div>
                </Loading>
            </div>
        </div>
    </MainLayout>
</template>
