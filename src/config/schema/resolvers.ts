



// functions for using database
import { connectDB, createBlogFunc, deleteBlog, updateBlog, getUsers, getSpecificUser, updateUserInDB, createUserFunc } from '../../util/db.js';

// types
import { blog, blogs, User }  from '../../types/blogs.js'


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

interface userOBJWUname {
  username: string

}

interface updateUser {
  username: string,
  nUsername: string,
  nName: string
}

interface UserCreatino {
  username: string,
  name: string,
  Role: string
}



export const resolvers = {
    Query: {

      // get all blogs
      getBlogs: () => {
        console.log('inside resolver')

        return connectDB()
      },

      getUsers: () => {

        return getUsers()
      }


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
    },

    getSpecificUser: async (_root: string, args: userOBJWUname, _context: string) => {

      const { username } = args;


      let specifUser = await getSpecificUser(username)



      return specifUser

    },

    updateUser: async (_root: string, args: updateUser, _context: string) => {
    
      const { username, nUsername, nName } = args;


      let updateUser = await updateUserInDB(username, nUsername, nName)


      return 'succes'


    },

    createUser: async (_root: string, args: UserCreatino, _context: string) => {
      const { username, name, Role } = args;


      // using function
      await createUserFunc(username, name, Role)


      return "succesfull?"
  },

  }

}
