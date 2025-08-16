export function sortBy<T>(array: T[], key: keyof T, direction: 'asc' | 'desc' = 'asc'): T[] {
  return array.slice().sort((a, b) => {
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1
    return 0
  })
}
