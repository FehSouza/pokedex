import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { ReactComponent as Arrow } from '../../assets/icons/Arrow.svg'
import { EvolutionSkeleton, PokemonEvolutionCard } from '../../components'
import { getEvolution, getPokemon, getSpecies } from '../../services'
import * as S from './styles'

const variants = {
  initial: { y: 100 },
  animate: { y: 0 },
} as const

const transition = { duration: 0.35 } as const

export const Evolution = () => {
  const params = useParams()

  const { data: pokemon } = useSWR(`/pokemon/${params.id}`, () => getPokemon(`/pokemon/${params.id}`))
  const { data: species } = useSWR(`/pokemon-species/${params.id}`, () => getSpecies(`/pokemon-species/${params.id}`))

  const evolutionId = species?.evolution_chain.url.split('/evolution-chain/')
  const { data: evolutions, isLoading } = useSWR(
    () => (species ? `/evolution-chain/${evolutionId?.[1]}` : null),
    () => getEvolution(`/evolution-chain/${evolutionId?.[1]}`)
  )

  return (
    <S.Container layoutId="container-page" layout variants={variants} initial="initial" animate="animate" transition={transition}>
      {pokemon && (
        <S.Content>
          <S.Subtitle color={`background-type-${pokemon.types[0].type.name}`}>Evolution Chart</S.Subtitle>

          {isLoading && <EvolutionSkeleton />}

          {evolutions?.map((evolution, index) => {
            return (
              <S.Evolution key={`evolution-${index}`}>
                <PokemonEvolutionCard id={evolution[0].id} name={evolution[0].name} key={evolution[0].id} idActive={params.id} />
                <S.LevelWrapper>
                  <Arrow />
                  <S.Level>{evolution[1].level ? `(Level ${evolution[1].level})` : 'Uncataloged level'}</S.Level>
                </S.LevelWrapper>
                <PokemonEvolutionCard id={evolution[1].id} name={evolution[1].name} key={evolution[1].id} idActive={params.id} />
              </S.Evolution>
            )
          })}

          {evolutions && !evolutions?.length && <S.withoutEvolution>This Pokemon has no evolutions</S.withoutEvolution>}
        </S.Content>
      )}
    </S.Container>
  )
}
