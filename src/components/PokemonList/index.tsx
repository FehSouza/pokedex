import { useSearchParams } from 'react-router-dom'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import { PokemonCard, PokemonCardSkeleton } from '..'
import { PokemonItemProps } from '../../@types'
import { getPokemon, getPokemonList } from '../../services'
import * as S from './styles'

const getKey = (page: number, previousPage: PokemonItemProps[]) => {
  if (previousPage && !previousPage.length) return null
  return `/pokemon/?offset=${page * 20}&limit=20`
}

const repeat = new Array(20).fill(null).map((_, i) => i + 1)

export const PokemonList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('q')

  const { data: pokemonList, size, setSize } = useSWRInfinite(getKey, getPokemonList)
  const { data: pokemon } = useSWR(`/pokemon/${search}`, () => getPokemon(`/pokemon/${search}`))

  const handleScroll = (e: React.UIEvent<HTMLUListElement, UIEvent>) => {
    const cardSize = 150
    const cardsPerRequest = cardSize * 20
    const cardsRemaining = cardSize * 6

    if (e.currentTarget.scrollTop >= cardsPerRequest * size - cardsRemaining) {
      setSize(size + 1)
      return
    }
  }

  const handleNavigateHome = () => setSearchParams('')

  return (
    <S.PokemonList onScroll={(e) => handleScroll(e)}>
      {!pokemonList && repeat.map((key) => <PokemonCardSkeleton key={key} />)}
      {!search && pokemonList && pokemonList.map((list) => list.map((cardInfo) => <PokemonCard key={cardInfo.id} item={cardInfo} />))}

      {search && pokemon && <PokemonCard key={pokemon.id} item={pokemon} />}
      {search && !pokemon && (
        <S.NotFound>
          <S.Text>Could not find a Pokemon.</S.Text>
          <S.Text>Check that the word is spelled correctly or that the National Pokédex number is correct, and do a new search.</S.Text>
          <S.Button onClick={handleNavigateHome}>Back to all Pokemon</S.Button>
        </S.NotFound>
      )}
    </S.PokemonList>
  )
}
