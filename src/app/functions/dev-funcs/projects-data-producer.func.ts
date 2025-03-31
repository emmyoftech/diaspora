import { Project } from "src/app/entites/Project.entity"

export function projectProducer(amount: number) {
    const projects: Project[] = []

    for (let i = 0; i < amount; i++) {      
        projects.push({
            title: "project ikoyi: luxury residence management",
            category: "property management",
            client: "anonymous",
            description: "Project Ikoyi represents the successful management of a high-end residential property in one of Lagos' most prestigious neighbourhoods. The property owner, residing abroad, entrusted DiasporaBuild with full property management, including tenant selection, rent collection, and regular maintenance to ensure the property remained in top condition.",
            imageUrl: "propery-1.jpeg",
            date: new Date()
        })
    }

    return projects
}