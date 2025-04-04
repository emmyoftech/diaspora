import { User } from "./User.entity"


export type ProjectEntity = {
    id?: number
    imageUrl: string,
    title: string,
    description: string,
    category: string,
    client: string,
    price: number,
    date: Date,
    otherimageUrls: string[]
}

export interface Project extends ProjectEntity {
    agent: User
}
