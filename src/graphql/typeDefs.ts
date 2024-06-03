



export const typeDefs = `#graphql



  type Blog (
    id Int,
    author String,
    url String,
    title String,
    likes INT
);






# queries

  type Query {
    blogs: [Blog]
  }
`;



