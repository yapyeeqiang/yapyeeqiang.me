import type { RepoResult } from '@/interfaces/github'
import axios from 'axios'

const gh = axios.create({
    baseURL: 'https://api.github.com',
})

export default {
    async queryRepos(username: string): Promise<RepoResult[]> {
        const { data: repos } = await gh.get(`/users/${username}/repos`)

        console.log(repos)

        return repos.map((repo: any) => {
            return {
                id: repo.id,
                url: repo.html_url,
                title: repo.name,
                description: repo.description,
                language: repo.language,
                forks: repo.forks_count,
                watchers: repo.watchers_count,
                createdAt: repo.created_at,
                updatedAt: repo.updated_at,
            }
        })
    },
}
