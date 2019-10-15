import { mergeTypes } from 'merge-graphql-schemas'

export function generateTypedefs() {
  const bikes = require('./bikes.graphql')
  const cyclists = require('./cyclists.graphql')
  return mergeTypes([bikes, cyclists], { all: true })
}
