

import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { blog } from '../types/blogs';

export const prisma = new PrismaClient()


export async function connectDB() {
  try {
    let result = await prisma.$queryRaw`SELECT * FROM Blogs`;

    return result
  
  } catch(e) {
    console.log('error when quering:', e)

  }

}


export async function createBlogFunc(blogObj: blog) {

  try {

    console.log('sending this to db:', blogObj)


    console.log('\n')

    let result = await prisma.$queryRaw`INSERT INTO Blogs (id, author, url, title, likes)  VALUES (blogObj) `;

    console.log('succes')

    return result
  
  } catch(e) {
    console.log('error when quering:', e)

  }
}


