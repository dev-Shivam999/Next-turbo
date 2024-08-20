import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton =()=>{
    return new PrismaClient()
}

declare global{
    var prisma:undefined|ReturnType<typeof PrismaClientSingleton>
}


const prisma=globalThis.prisma??PrismaClientSingleton()

export default prisma

if (process.env.NODE_EN!=="production")     globalThis.prisma=prisma
