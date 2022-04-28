<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
    <MainLayout>
        <div class="max-w-5xl mx-auto">
            <div v-if="false" class="flex flex-col items-start">
                <h1 class="text-4xl font-semibold">Talks</h1>
            </div>

            <div v-else class="flex flex-col items-center justify-center py-32 space-y-10">
                <div class="flex flex-col items-center space-y-4">
                    <h1 class="text-4xl font-semibold">Coming soon.</h1>
                    <p class="text-gray-400 font-light italic text-center">Stay tuned for some of my personal talks!</p>
                </div>

                <div class="animate-pulse hover:animate-none">
                    <router-link class="hover:text-zinc-600 dark:text-gray-50" to="/">Go back home &rarr;</router-link>
                </div>
            </div>
        </div>
    </MainLayout>
</template>
