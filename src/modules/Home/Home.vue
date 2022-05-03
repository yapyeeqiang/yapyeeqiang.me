<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import Link from '@/components/Link.vue'
</script>

<template>
    <MainLayout>
        <div class="max-w-5xl mx-auto">
            <div class="space-y-8">
                <h1 class="text-4xl font-semibold">Yap Yee Qiang</h1>

                <div class="space-y-20">
                    <div class="space-y-4">
                        <p>Hey, I am Yap Yee Qiang, a tech enthusiast and an educator believes that everyone can be a self-taught developer.</p>

                        <div>
                            <p>Creator of <Link href="https://github.com/yapyeeqiang/whatsapp-sender">WhatsApp Sender</Link>, <Link href="https://github.com/yapyeeqiang/create-vue-app">Create Vue App</Link>, <Link href="https://github.com/yapyeeqiang/api-code-generator">API Code Generator</Link>, <Link href="https://learnpinia.netlify.app/">Learn Pinia Documentation</Link>.</p>
                            <p>Software Developer at <Link href="https://hackercollective.co/">The Hacker Collective</Link>.</p>
                            <p>Curriculum Lead (Frontend) at <Link href="https://sigmaschool.co/">Sigma School</Link></p>
                        </div>

                        <div>
                            <p>Dreaming up ideas and making them come true is where my passion lies.</p>
                        </div>

                        <div>
                            <p>Outside of programming, I enjoy playing basketball and traveling.</p>
                        </div>
                    </div>

                    <div class="space-y-1">
                        <p>Find me on <Link href="https://github.com/yapyeeqiang">GitHub</Link>, <Link href="https://twitter.com/yapyeeqiang">Twitter</Link>, or <Link href="https://instagram.com/yapyeeqiang">Instagram</Link>.</p>
                        <p>Mail me at <Link href="mailto:hi@yeeqiang.me">hi@yeeqiang.me</Link></p>
                        <p>Chat with the community at <Link href="https://discord.com/invite/nzdXz5zhx8">my Discord Server</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>
