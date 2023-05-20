import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { getPokemon } from '../../services'
import * as S from './styles'

const variants = {
  initial: { y: 100 },
  animate: { y: 0 },
} as const

const transition = { duration: 0.35 } as const

export const Stats = () => {
  const params = useParams()

  const { data: pokemon } = useSWR(`/pokemon/${params.id}`, () => getPokemon(`/pokemon/${params.id}`))

  const baseStats = pokemon?.stats.map((states) => {
    return {
      infoName: states.stat.name.replace('-', ' '),
      info: states.base_stat,
    }
  })

  const totalBaseStats = baseStats?.reduce((acc, states) => (acc = acc + Number(states.info)), 0)

  return (
    <S.Container layoutId="container-page" layout variants={variants} initial="initial" animate="animate" transition={transition}>
      {pokemon && (
        <S.Content>
          <S.Subtitle color={`background-type-${pokemon.types[0].type.name}`}>Base Stats</S.Subtitle>

          {baseStats?.map((info, i) => (
            <S.Wrapper key={`base-stats-${i}`}>
              <S.InfoName>{info.infoName}</S.InfoName>
              <S.Info>{info.info}</S.Info>
              <S.Status>
                <S.StatusInt color={`background-type-${pokemon.types[0].type.name}`} value={Number(info.info)} />
              </S.Status>
            </S.Wrapper>
          ))}

          <S.Wrapper>
            <S.InfoName>Total</S.InfoName>
            <S.Info style={{ fontWeight: '700' }}>{totalBaseStats}</S.Info>
          </S.Wrapper>

          <S.Observation>The ranges shown on the right are for a level 100 Pokémon.</S.Observation>
        </S.Content>
      )}
    </S.Container>
  )
}
