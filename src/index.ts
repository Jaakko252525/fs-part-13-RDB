


require('dotenv').config();
import { PrismaClient, Blogs } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

  try {
    let result = await prisma.$queryRaw`SELECT * FROM Blogs`;

    console.log('queried thes blogs:', result)
  
  } catch(e) {
    console.log('error when quering:', e)

  }

}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })








