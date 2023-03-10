console.log("starterapp");
const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
const { ApolloServer } = require("apollo-server-express");

const { authMiddleware } = require("./utils/auth");
// importing typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});


// server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
app.use(express.static(path.join(__dirname, "../client/build")));

// app.use(routes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client"));
// });


const startApolloServer = async (typeDefs, resolvers) => {
  console.log("apolloServerStarter")
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', (error) => {
    if (error) {
      console.log(error);
    }
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);