<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
    <MainLayout>
        <div class="max-w-5xl mx-auto min-h-full">
            <div class="flex flex-col items-center justify-center py-32 space-y-10">
                <div class="flex flex-col items-center space-y-4">
                    <h1 class="text-4xl font-semibold">Page not found.</h1>
                    <p class="text-gray-400 font-light italic text-center">Sorry, we couldn't find the page you're looking for.</p>
                </div>

                <div class="animate-pulse hover:animate-none">
                    <router-link class="hover:text-zinc-600" to="/">Go back home &rarr;</router-link>
                </div>
            </div>
        </div>
    </MainLayout>
</template>
