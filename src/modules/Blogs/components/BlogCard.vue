<script setup lang="ts">
import type { BlogPreview } from '@/interfaces/notion'

defineProps<{
    blog: BlogPreview
}>()
</script>

<template>
    <div class="flex-shrink-0">
        <img class="h-48 w-full object-cover" :src="blog.cover" alt="" />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
            <p class="text-sm font-medium text-gray-600">
                {{ blog.category }}
            </p>
            <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                    {{ blog.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                    {{ blog.description }}
                </p>
            </div>
        </div>
        <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
                <div>
                    <span class="sr-only">{{ blog.author.name }}</span>
                    <img class="h-10 w-10 rounded-full" :src="blog.author.imageURL" alt="" />
                </div>
            </div>
            <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                    {{ blog.author.name }}
                </p>
                <p class="text-sm text-gray-500">
                    {{ blog.createdAt }}
                </p>
            </div>
        </div>
    </div>
</template>
