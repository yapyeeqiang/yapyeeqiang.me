<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import notion from '@/api/notion'
import { onMounted } from 'vue'

onMounted(async () => {
    const pages = await notion.getDatabase()

    pages.forEach(async (page: any) => {
        const pageContent = await notion.getPageContent(page.id)

        console.log(pageContent)
    })
})
</script>

<template>
    <MainLayout>
        <div class="max-w-5xl mx-auto">
            <div class="flex flex-col items-start">
                <h1 class="text-4xl font-semibold">Blogs</h1>
            </div>
        </div>
    </MainLayout>
</template>
