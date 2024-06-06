



// functions for using database
import { connectDB, createBlogFunc, deleteBlog } from '../database.js';

// types
import { blog, blogs }  from '../../types/blogs.js'


interface deleteType {
  title: string
}

export const resolvers = {
    Query: {

      // get all blogs
      getBlogs: () => {
        console.log('inside resolver')

        return connectDB()
      },


    },


    Mutation: {

      createBlog: async (_root: string, args: blog, _context: string) => {
        const { id, author, url, title, likes } = args;


        // making object
        const blogObj = { id, author, url, title, likes
        }


        // using function
        await createBlogFunc(blogObj)


        return "succesfull?"
    },

    


    deleteBlog: async (_root: string, args: deleteType, _context: string) => {

      const { title } = args;

      // using function
      await deleteBlog(title)


      return "succesfull?"
  },


    }


    
  };



