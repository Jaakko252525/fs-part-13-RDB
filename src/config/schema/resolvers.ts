



// functions for using database
import { connectDB, createBlogFunc, deleteBlog, updateBlog } from '../../util/db.js';

// types
import { blog, blogs }  from '../../types/blogs.js'


interface deleteType {
  title: string
}

interface updateType {
  title: string,
  author: string,
  nAuthor: String,
  nUrl: String,
  nTitle: String,
  nLikes: String
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

    updateBlog: async (_root: string, args: updateType, _context: string) => {

      const { title, author, nAuthor, nTitle, nUrl, nLikes } = args;


      await updateBlog(title, author, nAuthor, nTitle, nUrl, nLikes)



      return


    }

    }


    
  };



