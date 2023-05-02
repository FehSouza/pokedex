import useSWR from 'swr'
import { PokemonItemProps } from '../../@types'

import { getPokemonList } from '../../services'

import { PokemonCard } from '../PokemonCard'
import * as S from './styles'

export const PokemonList = () => {
  const { data: pokemon } = useSWR('api/pokemon', getPokemonList)

  return <S.PokemonList>{pokemon && pokemon.map((item: PokemonItemProps) => <PokemonCard item={item} />)}</S.PokemonList>
}
