import axios from 'axios'

const BASE_URL = 'https://s2.googleusercontent.com/s2/favicons'

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
})

export default {
    async getIcon(domain: string) {
        try {
            const response = await client.get('/', {
                params: {
                    domain,
                },
            })

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    },
}
