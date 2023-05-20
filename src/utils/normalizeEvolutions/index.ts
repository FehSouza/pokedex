import { Chain } from '../../@types/Evolution'

type EvolutionsProps = { name: string; id: string; level: number | undefined }[]

export const normalizeEvolutions = (chain?: Chain) => {
  if (!chain) return []

  const [_, idPokemon] = chain.species.url.split('/pokemon-species/')

  const evolutions: EvolutionsProps = [{ id: idPokemon, name: chain.species.name, level: chain.evolution_details?.[0]?.min_level }]
  const internalChains = chain.evolves_to

  if (internalChains.length) {
    const evolution = internalChains.map(normalizeEvolutions).flat()
    evolution.forEach((item) => evolutions.push(item))
  }

  return evolutions
}

export const groupsEvolutions = (evolutions: EvolutionsProps) => {
  const group: [EvolutionsProps[number], EvolutionsProps[number]][] = []

  for (let i = 0; i < evolutions.length - 1; i++) {
    const first = evolutions[i]
    const second = evolutions[i + 1]

    group.push([first, second])
  }

  return group
}
