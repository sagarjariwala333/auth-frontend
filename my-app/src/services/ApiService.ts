import { delay } from "@/utilis/timer.util"

export const loginService = async (email: string, password: string) => {
    console.log(email, password)
    await delay(3000)
    return { data: { token: 'hello' } }
}

export const getProductsService = async () => {
    await delay(3000)
    return [
        {
            id: '1',
            name: 'Samsung',
            userId: '1',
            userName: 'Sagar'
        },
        {
            id: '2',
            name: 'Samsung',
            userId: '2',
            userName: 'Rahul'
        }
    ]
}