import { Project } from "src/app/entites/Project.entity"
import { randomFrom } from "./random-from.func"
import { userProducer } from "./user-data-producer.func"

export function projectProducer(amount: number) {
    const projects: Project[] = []

    for (let i = 0; i < amount; i++) {      
        projects.push({
            id: randomFrom([0,1,2,3,4,5,6,7,7]),
            title: "project ikoyi: luxury residence management",
            category: "property management",
            price: randomFrom([13_000_000, 26_363_363, 25_456_780]),
            client: "anonymous",
            description: "Project Ikoyi represents the successful management of a high-end residential property in one of Lagos' most prestigious neighbourhoods. The property owner, residing abroad, entrusted DiasporaBuild with full property management, including tenant selection, rent collection, and regular maintenance to ensure the property remained in top condition.",
            imageUrl: randomFrom(["property-1.jpeg", "property-2.jpeg", "property-3.jpeg"]),
            date: new Date(),
            otherimageUrls: [
                randomFrom(["property-1.jpeg", "property-2.jpeg", "property-3.jpeg"]),
                randomFrom(["property-1.jpeg", "property-2.jpeg", "property-3.jpeg"]),
                randomFrom(["property-1.jpeg", "property-2.jpeg", "property-3.jpeg"]),
                randomFrom(["property-1.jpeg", "property-2.jpeg", "property-3.jpeg"]),
                randomFrom(["property-1.jpeg", "property-2.jpeg", "property-3.jpeg"])
            ],
            agent: userProducer(1)[0]
        })
    }

    return projects
}