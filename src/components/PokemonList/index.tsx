import useSWRInfinite from 'swr/infinite'
import { PokemonItemProps } from '../../@types'
import { getPokemonList } from '../../services'
import { PokemonCard } from '../PokemonCard'
import * as S from './styles'

const getKey = (page: number, previousPage: PokemonItemProps[]) => {
  if (previousPage && !previousPage.length) return null
  return `/pokemon?offset=${page * 40}&limit=40`
}

export const PokemonList = () => {
  const { data: pokemon, size, setSize } = useSWRInfinite(getKey, getPokemonList)

  const handleScroll = (e: React.UIEvent<HTMLUListElement, UIEvent>) => {
    console.log(size)
    const cardSize = 150
    const cardsPerRequest = cardSize * 40
    const cardsRemaining = cardSize * 6

    if (e.currentTarget.scrollTop >= cardsPerRequest * size - cardsRemaining) {
      setSize(size + 1)
      return
    }
  }

  return (
    <S.PokemonList onScroll={(e) => handleScroll(e)}>
      {pokemon && pokemon.map((list) => list.map((cardInfo) => <PokemonCard key={cardInfo.id} item={cardInfo} />))}
    </S.PokemonList>
  )
}
