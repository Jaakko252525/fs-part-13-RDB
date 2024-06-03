




import { connectDB } from '../database.js';

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
  };



