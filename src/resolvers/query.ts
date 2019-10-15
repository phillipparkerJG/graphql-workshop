import { Cyclist, QueryResolvers } from '../resolvers-types'
import { cyclists } from '../data/cyclists.json'
import { find } from '../helpers'

export const Query: QueryResolvers = {
  async getCyclist(_, { name }) {
    return find<Cyclist>(cyclists, cyclist => cyclist.name === name)
  },
}
