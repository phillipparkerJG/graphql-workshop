export function find<T>(
  collection: any[],
  predicate: (entry: any) => boolean
): T | null {
  const entry = collection.find(predicate)
  if (entry === undefined) {
    return null
  }
  return entry
}
