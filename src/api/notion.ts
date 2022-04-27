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
            console.log(error)
        }
    },
    async getPageContent(pageID: string) {
        try {
            const { data } = await notion.get(`/pages/${pageID}`)

            return data
        } catch (error) {
            console.log(error)
        }
    },
}
