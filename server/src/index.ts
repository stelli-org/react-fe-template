import { ApolloServer, ServerInfo, gql } from "apollo-server";

const typeDefs = gql`
  type Survey {
    id: ID!
  }

  type Query {
    getSurvey: Survey!
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }: ServerInfo) => {
  console.log("Server is running on: " + url);
});
