<script setup lang="ts">
defineProps<{
    href: string
}>()
</script>

<template>
    <a class="link text-blue-600 dark:text-blue-400 inline-flex" :href="href" target="blank">
        <slot />
    </a>
</template>

<style>
.link {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent), linear-gradient(black, black);
    background-size: 0 2px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.2s ease-in-out;
}

.link:hover {
    background-size: 100% 2px;
    background-position: 0 100%;
}
</style>
