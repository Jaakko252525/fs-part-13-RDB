






// types
import { blog, blogs }  from '../../types/blogs.js'



export const resolvers = {
    Query: {
      blogs: (): blog[] => blogs
    },
  };



