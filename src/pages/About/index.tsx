import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { getPokemon, getSpecies } from '../../services'
import { measurementConverter, weightConverter } from '../../utils'
import * as S from './styles'

const variants = {
  initial: { y: 100 },
  animate: { y: 0 },
} as const

const transition = { duration: 0.35 } as const

export const About = () => {
  const params = useParams()

  const { data: pokemon } = useSWR(`/pokemon/${params.id}`, () => getPokemon(`/pokemon/${params.id}`))
  const { data: species } = useSWR(`/pokemon-species/${params.id}`, () => getSpecies(`/pokemon-species/${params.id}`))

  const description = species?.flavor_text_entries[7].flavor_text.replace(/\f/g, ' ').replace('POKéMON', 'Pokémon')

  const speciesName = species?.genera[7].genus
  const height = Number(pokemon?.height) / 10
  const heightFormatted = `${String(height.toFixed(2).replace('.', ','))} m (${measurementConverter(height)})`
  const weight = Number(pokemon?.weight) / 10
  const weightFormatted = `${String(weight.toFixed(2).replace('.', ','))} kg (${weightConverter(weight)})`
  const abilities = pokemon?.abilities.map((ability) => ability.ability.name.replace('-', ' '))

  const validStats = pokemon?.stats.filter((stats) => stats.effort !== 0)
  const evYield = validStats?.map((stats) => `${stats.effort} ${stats.stat.name.replace('-', ' ')}`)
  const catchRate = species?.capture_rate
  const baseFriendship = species?.base_happiness
  const baseExp = pokemon?.base_experience
  const growthRate = species?.growth_rate.name.replace('-', ' ')
  const eggGroups = species?.egg_groups.map((group) => group.name)

  const pokédexData = [
    { infoName: 'Species', info: [speciesName] },
    { infoName: 'Height', info: [heightFormatted] },
    { infoName: 'Weight', info: [weightFormatted] },
    { infoName: 'Abilities', info: abilities },
  ]

  const training = [
    { infoName: 'EV Yield', info: evYield },
    { infoName: 'Catch Rate', info: [catchRate] },
    { infoName: 'Base Friendship', info: [baseFriendship] },
    { infoName: 'Base Exp', info: [baseExp] },
    { infoName: 'Growth Rate', info: [growthRate] },
    { infoName: 'Egg Groups', info: eggGroups },
  ]

  return (
    <S.Container layout layoutId="container-page" variants={variants} initial="initial" animate="animate" transition={transition}>
      {pokemon && (
        <S.Content>
          <S.Description dangerouslySetInnerHTML={{ __html: description ?? '' }}></S.Description>

          <S.Subtitle color={`background-type-${pokemon.types[0].type.name}`}>Pokédex Data</S.Subtitle>

          {pokédexData.map((info, i) => (
            <S.Wrapper key={`data-${i}`}>
              <S.InfoName>{info.infoName}</S.InfoName>
              <S.InfoWrapper>
                {info.info && info.info.map((item, index) => <S.Info key={`data-info${index}`}>{item}</S.Info>)}
              </S.InfoWrapper>
            </S.Wrapper>
          ))}

          <S.Subtitle color={`background-type-${pokemon.types[0].type.name}`}>Training</S.Subtitle>

          {training.map((info, i) => (
            <S.Wrapper key={`training-${i}`}>
              <S.InfoName>{info.infoName}</S.InfoName>
              <S.InfoWrapper>
                {info.info && info.info.map((item, index) => <S.Info key={`training-info${index}`}>{item}</S.Info>)}
              </S.InfoWrapper>
            </S.Wrapper>
          ))}
        </S.Content>
      )}
    </S.Container>
  )
}
