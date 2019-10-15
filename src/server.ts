import { ApolloServer } from 'apollo-server-lambda'
import { generateTypedefs } from './schema'
import { Query } from './resolvers/query'
import { Cyclist } from './resolvers/cyclist'

export function configureServer() {
  const resolvers = {
    Query,
    Cyclist,
  }

  return new ApolloServer({
    resolvers: resolvers as any,
    typeDefs: generateTypedefs(),
  })
}
