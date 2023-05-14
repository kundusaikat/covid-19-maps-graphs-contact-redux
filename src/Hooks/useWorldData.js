import { useQuery } from 'react-query'

export function useWorldData() {
  return useQuery('worldData', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/all')
    const data = await response.json()
    return data
  }, {
    staleTime: 60000, // cache result for 1 minute
  })
}
