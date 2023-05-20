import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import { Button, NotFound, PokemonCardHome, PokemonCardSkeleton } from '..'
import { PokemonItemProps } from '../../@types/PokemonItem'
import { getPokemon, getPokemonList } from '../../services'
import * as S from './styles'

const getKey = (page: number, previousPage: PokemonItemProps[]) => {
  if (previousPage && !previousPage.length) return null
  return `/pokemon/?offset=${page * 20}&limit=20`
}

const repeat = new Array(20).fill(null).map((_, i) => i + 1)

let lastScrollPosition = 0

export const PokemonList = () => {
  const listRef = useRef<HTMLUListElement>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('q')
  const { data: pokemonList, size, setSize } = useSWRInfinite(getKey, getPokemonList)
  const {
    data: pokemon,
    isLoading,
    error,
  } = useSWR(
    () => (search ? `/pokemon/${search}` : null),
    () => getPokemon(`/pokemon/${search}`)
  )

  const handleScroll = (e: React.UIEvent<HTMLUListElement, UIEvent>) => {
    const cardSize = 150
    const cardsPerRequest = cardSize * 20
    const cardsRemaining = cardSize * 8

    lastScrollPosition = e.currentTarget.scrollTop

    if (e.currentTarget.scrollTop >= cardsPerRequest * size - cardsRemaining) {
      setSize(size + 1)
      return
    }
  }

  const handleNavigateHome = () => setSearchParams('')

  useEffect(() => listRef.current?.scrollTo({ top: lastScrollPosition }), [])

  return (
    <S.PokemonList onScroll={(e) => handleScroll(e)} ref={listRef}>
      {!pokemonList && repeat.map((key) => <PokemonCardSkeleton key={key} />)}
      {!search && pokemonList && pokemonList.map((list) => list.map((cardInfo) => <PokemonCardHome key={cardInfo.id} item={cardInfo} />))}

      {search && isLoading && <PokemonCardSkeleton key={0} />}
      {search && error && <NotFound onClick={handleNavigateHome} />}
      {search && pokemon && (
        <>
          <PokemonCardHome key={pokemon.id} item={pokemon} />
          <Button text="Back to all Pokemon" mt={45} select={false} nameButton="Back to home" onClick={handleNavigateHome} />
        </>
      )}
    </S.PokemonList>
  )
}
