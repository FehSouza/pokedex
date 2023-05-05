import useSWRInfinite from 'swr/infinite'
import { PokemonCard, PokemonCardSkeleton } from '..'
import { PokemonItemProps } from '../../@types'
import { getPokemonList } from '../../services'
import * as S from './styles'

const getKey = (page: number, previousPage: PokemonItemProps[]) => {
  if (previousPage && !previousPage.length) return null
  return `/pokemon?offset=${page * 20}&limit=20`
}

const repeat = new Array(20).fill(null).map((_, i) => i + 1)

export const PokemonList = () => {
  const { data: pokemon, size, setSize } = useSWRInfinite(getKey, getPokemonList)

  const handleScroll = (e: React.UIEvent<HTMLUListElement, UIEvent>) => {
    const cardSize = 150
    const cardsPerRequest = cardSize * 20
    const cardsRemaining = cardSize * 6

    if (e.currentTarget.scrollTop >= cardsPerRequest * size - cardsRemaining) {
      setSize(size + 1)
      return
    }
  }

  return (
    <S.PokemonList onScroll={(e) => handleScroll(e)}>
      {!pokemon && repeat.map((key) => <PokemonCardSkeleton key={key} />)}
      {pokemon && pokemon.map((list) => list.map((cardInfo) => <PokemonCard key={cardInfo.id} item={cardInfo} />))}
    </S.PokemonList>
  )
}
