

import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()


export async function connectDB() {
  try {
    let result = await prisma.$queryRaw`SELECT * FROM Blogs`;
    console.log('queried thes blogs:', result)

    return result
  
  } catch(e) {
    console.log('error when quering:', e)

  }

}


export async function conn() {
  
  return prisma
}


