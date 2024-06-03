

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


export async function createBlog(id: String, author: String, url: String, title: String, likes: String) {

  try {

    console.log('sending this to db:', id, author, title)

    let result = await prisma.$queryRaw`INSER INTO Blogs (id, author, url, title, likes)
              VALUES (id, author, url, title, likes)
              `;

    console.log('succes')

    return result
  
  } catch(e) {
    console.log('error when quering:', e)

  }
}


