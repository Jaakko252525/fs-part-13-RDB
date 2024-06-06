

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

export async function getUsers() {



  try {

    let users = await prisma.$queryRaw`SELECT * FROM Users`


    return users
  } catch(err) {

    console.log('error is:', err)

    return

  }



}

export async function getSpecificUser(username: string) {

  try {

    console.log('username quered:', username)

    let specificUser = await prisma.$queryRaw`SELECT * FROM Users WHERE username = ${username}`

    console.log('result:', specificUser)

    return specificUser

  } catch(err) {

    console.log('error is:', err)

  }

}


export async function updateUserInDB(username: String, nUsername: string, nName: string) {

  try {

    let result = await prisma.$queryRaw`UPDATE Users SET username = ${nUsername}, name = ${nName} WHERE username = ${username};`;

    return result

  } catch(err) {

    console.log('error is:', err)
  }



}

export async function createUserFunc(username: string, name: string, Role: string) {

  try {



    let result = await prisma.$queryRaw`INSERT INTO Users (username, name, Role) VALUES (${username}, ${name}, ${Role})`;

    console.log('succes')

    return result
  
  } catch(e) {
    console.log('error when quering:', e)

  }
}





