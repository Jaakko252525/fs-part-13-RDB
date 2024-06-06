

// prolly should import this?const { DATABASE_URL } = require('./config')

import './config.js'

import { PrismaClient } from '@prisma/client'
import { blog } from '../types/blogs'

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



    let result = await prisma.$queryRaw`INSERT INTO Blogs (author, url, title, likes)  VALUES (${blogObj.author}, ${blogObj.url}, ${blogObj.title}, ${Number(blogObj.likes)}) `;

    console.log('succes')

    return result
  
  } catch(e) {
    console.log('error when quering:', e)

  }
}


export async function deleteBlog(title:string) {


  try {

    let deleting = await prisma.$queryRaw`DELETE FROM Blogs WHERE title = ${title};`

    return 'succes'
    
  } catch(err) {

    console.log('error is:', err)


  }

}


export async function updateBlog(title:String, author:String, nAuthor: String, nUrl: String, nTitle: String, nLikes: String)  {


  try {

    console.log('data coming in:', author, title, nAuthor, nLikes, nUrl, nTitle)

    let updating = await prisma.$executeRaw`UPDATE Blogs SET author = ${nAuthor} , title = ${nTitle} , url = ${nUrl} , likes = ${Number(nLikes)}
    WHERE author = ${author};`


    return

  } catch(err) {

    console.log('error is:', err)

  }


  
}





