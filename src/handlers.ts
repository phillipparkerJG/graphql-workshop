import { configureServer } from './server'

export const graphql = configureServer().createHandler({
  cors: {
    credentials: true,
    origin: '*',
  },
})
