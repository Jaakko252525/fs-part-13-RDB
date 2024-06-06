




// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.



  type Blog {
    id: String
    author: String
    url: String
    title: String
    likes: String
  }

  type User {
    id: String
    username: String
    name: String
  }


  type Query {
    getBlogs: [Blog]
    getUsers: [User]
  }



  type Mutation {
    createBlog(id: String, author: String, url: String, title: String, likes: String): [Blog]
    deleteBlog(title:String): [Blog]
    updateBlog(title:String, author:String, nAuthor: String, nUrl: String, nTitle: String, nLikes: String): [Blog]
    getSpecificUser(username: String): [User]
    updateUser(username: String, nUsername: String, nName: String): User
    createUser(username: String, name: String, Role: String): User

  }
`;

