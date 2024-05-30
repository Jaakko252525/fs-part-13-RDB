


require('dotenv').config();
import { PrismaClient, Blogs } from '@prisma/client'




const prisma = new PrismaClient()

async function main() {

  try {
    const blogs: Blogs[] = await prisma.blogs.findMany()
    console.log('queried thes blogs:', blogs)
  
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








