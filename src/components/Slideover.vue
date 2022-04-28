<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="fixed inset-0 overflow-hidden md:hidden" @close="emit('toggleOpen', false)">
            <div class="absolute inset-0 overflow-hidden">
                <DialogOverlay class="absolute inset-0" />

                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                        <div class="pointer-events-auto w-[300px] max-w-md">
                            <div class="flex h-full flex-col overflow-y-scroll bg-gray-50 text-zinc-900 dark:bg-zinc-800 dark:text-gray-50 py-8 shadow-xl">
                                <div class="px-5">
                                    <div class="flex items-start justify-between">
                                        <DialogTitle class="text-lg font-medium pl-5"> Menus </DialogTitle>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button type="button" class="rounded-md text-gray-400 dark:hover:text-gray-50 hover:text-gray-500 focus:outline-none" @click="emit('toggleOpen', false)">
                                                <span class="sr-only">Close panel</span>
                                                <XIcon class="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative mt-6 flex-1 px-5 sm:px-10">
                                    <slot />
                                </div>
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'

defineProps<{
    open: boolean
}>()

const emit = defineEmits<{
    (e: 'toggleOpen', value: boolean): any
}>()
</script>
