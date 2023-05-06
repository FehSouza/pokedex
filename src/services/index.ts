import { PokemonProps } from '../@types'
import { api } from '../api'

export const getPokemonList = async (url: string) => {
  const response = await api.get(url)
  const result = response.data.results

  return Promise.all(
    result.map(async (item: PokemonProps) => {
      const list = await api.get(item.url)
      return list.data
    })
  )
}

export const getPokemon = async (url: string) => {
  const response = await api.get(url)
  const result = response.data
  return result
}
