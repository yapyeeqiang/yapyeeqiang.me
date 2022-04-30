import axios from 'axios'

const notion = axios.create({
    baseURL: 'http://localhost:8080',
})

export default {
    async getDatabase() {
        try {
            const { data } = await notion.get('/database')

            return data
        } catch (error) {
            return error
        }
    },
    async getPageContent(pageID: string) {
        try {
            const { data } = await notion.get(`/pages/${pageID}`)

            return data
        } catch (error) {
            return error
        }
    },

    async getPageAuthor(authorID: string) {
        try {
            const { data } = await notion.get(`/user/${authorID}`)

            return data
        } catch (error) {
            return error
        }
    },
}
