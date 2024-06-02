

require('dotenv').config();
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function connectDB() {
  try {
    let result = await prisma.$queryRaw`SELECT * FROM Blogs`;
    console.log('queried thes blogs:', result)
  
  } catch(e) {
    console.log('error when quering:', e)

  }

}

module.exports = connectDB
