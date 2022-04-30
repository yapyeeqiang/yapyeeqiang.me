interface NotionContent {
    archived: boolean
    created_by: {
        id: string
        object: string
    }
    created_time: string
    has_children: boolean
    id: string
    last_edited_by: {
        id: string
        object: string
    }
    last_edited_time: string
    object: string
    type: string
}

export const notionParser = (contents: NotionContent[]) => {}
