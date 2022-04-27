const express = require('express')
const cors = require('cors')
const { Client } = require('@notionhq/client')
require('dotenv').config()

const notion = new Client({ auth: process.env.VITE_NOTION_TOKEN })

const app = express()
app.use(express.json())
app.use(cors())

app.get('/database', async (req, res) => {
    const query = await notion.databases.query({ database_id: process.env.VITE_NOTION_DATABASE_ID })

    const list = query.results.map((row) => row)

    res.json(list)
})

app.get('/pages/:id', async (req, res) => {
    const { id } = req.params
    const contents = await notion.blocks.children.list({
        block_id: id,
    })

    res.json(contents)
})

app.listen(8080, () => {
    console.log('Server running!')
})
