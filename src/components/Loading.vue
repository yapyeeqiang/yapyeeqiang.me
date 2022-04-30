<script setup lang="ts">
import { RefreshIcon } from '@heroicons/vue/outline'

defineProps<{
    isLoading: boolean
}>()
</script>

<template>
    <div v-if="isLoading">
        <p class="flex items-center space-x-2 text-gray-500 font-light animate-pulse">
            <span>Loading</span>
            <RefreshIcon class="h-4 w-4 animate-spin" />
        </p>
    </div>

    <div v-else>
        <slot />
    </div>
</template>
