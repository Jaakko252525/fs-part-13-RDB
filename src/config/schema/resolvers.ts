



// functions for using database
import { connectDB, createBlog } from '../database.js';

// types
import { blog, blogs }  from '../../types/blogs.js'



export const resolvers = {
    Query: {

      // get all blogs
      getBlogs: () => {
        console.log('inside resolver')

        return connectDB()
      },


    },
    Mutation: {
      createBlog: async (id: string, author: string, url: string, title: string, likes:string) => {


        createBlog(id, author, url, title, likes)

        return connectDB()
      },


    }


    
  };



