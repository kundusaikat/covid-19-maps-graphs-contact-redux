import { useQuery } from 'react-query'

export function useCountryData() {
  return useQuery('countryData', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries')
    const data = await response.json()

    // console.log(data , 'country-data');
    return data
  }, {
    staleTime: 60000, // cache result for 1 minute
  })
}
