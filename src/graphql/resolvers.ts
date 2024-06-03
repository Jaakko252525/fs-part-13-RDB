






// types
import { blog, blogs }  from '../types/blogs'



export const resolvers = {
    Query: {
      books: (): blog[] => blogs
    },
  };



