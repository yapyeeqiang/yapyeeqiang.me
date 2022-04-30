import type { RepoResult } from '@/interfaces/github'
import axios from 'axios'

const gh = axios.create({
    baseURL: 'https://api.github.com',
})

export default {
    async queryRepos(username: string, pageNumber: number = 1): Promise<RepoResult[]> {
        const { data: repos } = await gh.get(`/users/${username}/repos?per_page=9&page=${pageNumber}`)

        return repos.map((repo: any) => {
            if (repo.private) return

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
                projectURL: repo?.homepage,
            }
        })
    },

    async getReposCount(username: string) {
        const { data } = await gh.get(`/users/${username}`)

        return data.public_repos
    },
}
