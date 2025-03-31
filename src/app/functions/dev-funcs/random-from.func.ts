export function randomFrom(entries: any[]){
    const randindex = Math.floor(Math.random() * entries.length)

    return entries[randindex]
}