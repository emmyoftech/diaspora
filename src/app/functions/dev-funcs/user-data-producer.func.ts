import { User } from "src/app/entites/User.entity";
import { randomFrom } from "./random-from.func";

export function userProducer(amount: number){
    const users: User[] = []

    for (let i = 0; i < amount; i++) {
        users.push({
            email: "emmanuelbowofoluwa@gmail.com",
            firstName: "emmanuel",
            lastName: "lasisi",
            phone: "906057393",
            phoneCode: "234",
            roleId: "0",
            imageUrl: randomFrom(["user-1", "user-2"]),
            location: randomFrom(["london, uk", "new york, usa"])

        })
    }

    return users
}