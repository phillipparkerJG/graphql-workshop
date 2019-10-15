import { Bike, CyclistResolvers } from '../resolvers-types'
import { bikes } from '../data/bikes.json'
import { find } from '../helpers'

export const Cyclist: CyclistResolvers = {
  bike({ bike }) {
    if (!bike || !bike.id) {
      return null
    }
    return find<Bike>(bikes, b => b.id === bike.id)
  },
}
