import { User } from "src/app/entites/User.entity";
import { randomFrom } from "./random-from.func";

export function userProducer(amount: number){
    const users: User[] = []

    for (let i = 0; i < amount; i++) {
        users.push({
            email: "emmanuelbowofoluwa@gmail.com",
            firstName: "moses",
            lastName: "afro",
            phone: "906057393",
            phoneCode: "234",
            roleId: "0",
            imageUrl: randomFrom(["user-1.png", "user-2.png"]),
            location: randomFrom(["london, UK", "new york, USA"])

        })
    }

    return users
}