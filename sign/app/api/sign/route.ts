"use server"
import client from '@/db'



export async function make(email: string, password: string, name: string) {
    try {
        await client.nextUser.create({
            data: {
                email: email,
                name: name,
                password: password
            }
        })



        return {
            message: "you are login"
        }
    }
    catch (error) {
        return {
            error: error
        }
    }
}
