import { EvolutionProps } from '../@types/Evolution'
import { PokemonItemProps, PokemonProps } from '../@types/PokemonItem'
import { SpeciesProps } from '../@types/Species'
import { api } from '../api'
import { groupsEvolutions, normalizeEvolutions } from '../utils'

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

export const getPokemon = async (url: string): Promise<PokemonItemProps> => {
  const response = await api.get(url)
  const result = response.data
  return result
}

export const getSpecies = async (url: string): Promise<SpeciesProps> => {
  const response = await api.get(url)
  const result = response.data
  return result
}

export const getEvolution = async (url: string) => {
  const response = await api.get<EvolutionProps>(url)
  const result = response.data
  return groupsEvolutions(normalizeEvolutions(result.chain))
}
