export interface BlogPreview {
    id: string
    title: string
    cover: string
    category: string
    description: string
    author: {
        name: string
        imageURL: string
    }
    createdAt: string
}
