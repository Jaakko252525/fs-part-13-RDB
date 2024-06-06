






import { ApolloServer } from '@apollo/server';


import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';

// npm install @apollo/server express graphql cors
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';

// graphql typedefs and resolvers
import { typeDefs } from './config/schema/typeDefs.js';
import { resolvers } from './config/schema/resolvers.js';


interface MyContext {
  token?: string;
}

const app = express();

const httpServer = http.createServer(app);



const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();


app.use(
  '/',
  cors<cors.CorsRequest>(),
  express.json(),


  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/`);



