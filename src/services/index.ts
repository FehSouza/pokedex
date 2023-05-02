import { PokemonProps } from '../@types'
import { api } from '../api'

export const getPokemonList = async () => {
  const response = await api.get('pokemon/')
  const result = response.data.results

  return Promise.all(
    result.map(async (item: PokemonProps) => {
      const list = await api.get(item.url)
      return list.data
    })
  )
}
