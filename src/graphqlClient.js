import { GraphQLClient } from "graphql-request";

const url = "https://tissa.stepzen.net/api/dealing-bison/__graphql";
const ApiKey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY

const client = new GraphQLClient(url, {
  headers: {
    Authorization:
      `apikey ${ApiKey}`
  },
});
export default client