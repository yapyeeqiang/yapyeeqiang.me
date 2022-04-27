import { ref } from 'vue'

export const useLoading = (time: number = 1) => {
    const isLoading = ref(false)

    const startLoading = () => {
        isLoading.value = true
    }

    const stopLoading = () => {
        const MILLISECONDS = 1000

        setTimeout(() => {
            isLoading.value = false
        }, time * MILLISECONDS)
    }

    return {
        isLoading,
        startLoading,
        stopLoading,
    }
}
