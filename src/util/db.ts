

// prolly should import this?const { DATABASE_URL } = require('./config')

import { PrismaClient } from '@prisma/client'
import { blog } from '../types/blogs'

export const prisma = new PrismaClient()


async function connectDB() {
  try {
    let result = await prisma.$queryRaw`SELECT * FROM Blogs`;

    return result
  
  } catch(e) {
    console.log('error when quering:', e)

  }

}


async function createBlogFunc(blogObj: blog) {

  try {



    let result = await prisma.$queryRaw`INSERT INTO Blogs (author, url, title, likes)  VALUES (${blogObj.author}, ${blogObj.url}, ${blogObj.title}, ${Number(blogObj.likes)}) `;

    console.log('succes')

    return result
  
  } catch(e) {
    console.log('error when quering:', e)

  }
}


async function deleteBlog(title:string) {


  try {

    let deleting = await prisma.$queryRaw`DELETE FROM Blogs WHERE title = ${title};`

    return 'succes'
    
  } catch(err) {

    console.log('error is:', err)


  }

}


module.exports = { createBlogFunc, deleteBlog, connectDB }