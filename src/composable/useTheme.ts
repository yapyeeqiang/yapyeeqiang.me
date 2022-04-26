import { onMounted, ref } from 'vue'

type Theme = 'light' | 'dark'

export const useTheme = () => {
    let theme = ref(localStorage.getItem('theme'))

    const setTheme = (theme: Theme) => {
        if (theme === 'light') {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }

        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
    }

    const toggleTheme = () => {
        if (theme.value === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }

        theme.value = localStorage.getItem('theme')
    }

    onMounted(() => {
        if (theme.value === 'dark') {
            setTheme('dark')
        } else if (theme.value === 'light') {
            setTheme('light')
        }
    })

    return {
        theme,
        toggleTheme,
    }
}
