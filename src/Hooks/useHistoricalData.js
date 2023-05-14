import { useQuery } from 'react-query'

export function useHistoricalData() {
  return useQuery('historicalData', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
    const data = await response.json()

    // console.log(data , 'country-data');
    return data
  }, {
    staleTime: 60000, // cache result for 1 minute
  })
}
