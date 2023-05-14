import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { getPokemon, getSpecies } from '../../services'
import { dispatchFixedHeader, useFixedHeader } from '../../states'
import { handleScroll } from '../../utils'
import * as S from './styles'

const variants = {
  initial: { y: 100 },
  animate: { y: 0 },
} as const

const transition = { duration: 0.35 } as const

export const About = () => {
  const params = useParams()
  const [fixedHeader] = useFixedHeader()

  const { data: pokemon } = useSWR(`/pokemon/${params.id}`, () => getPokemon(`/pokemon/${params.id}`))
  const { data: species } = useSWR(`/pokemon-species/${params.id}`, () => getSpecies(`/pokemon-species/${params.id}`))

  const description = species?.flavor_text_entries[7].flavor_text.replace(/\f/g, ' ').replace('POKéMON', 'Pokémon')

  const pokédexData = [
    { infoName: 'Species', info: '' },
    { infoName: 'Height', info: '' },
    { infoName: 'Weight', info: '' },
    { infoName: 'Abilities', info: '' },
    { infoName: 'Weaknesses', info: '' },
  ]

  const training = [
    { infoName: 'EV Yield', info: '' },
    { infoName: 'Catch Rate', info: '' },
    { infoName: 'Base Friendship', info: '' },
    { infoName: 'Base Exp', info: '' },
    { infoName: 'Growth Rate', info: '' },
  ]

  const breeding = [
    { infoName: 'Gender', info: '' },
    { infoName: 'Egg Groups', info: '' },
    { infoName: 'Egg Cycles', info: '' },
  ]

  return (
    <S.Container
      layout
      layoutId="container-page"
      variants={variants}
      initial="initial"
      animate="animate"
      transition={transition}
      fixedHeader={fixedHeader}
      onScroll={(e) => handleScroll({ e, fixedHeader, dispatchFixedHeader })}
    >
      {pokemon && (
        <>
          <S.Description dangerouslySetInnerHTML={{ __html: description ?? '' }}></S.Description>

          <S.Subtitle color={`background-type-${pokemon.types[0].type.name}`}>Pokédex Data</S.Subtitle>
          {pokédexData.map((info, i) => (
            <S.Wrapper key={`pokédex-data-${i}`}>
              <S.InfoName>{info.infoName}</S.InfoName>
              <S.Info>{info.info}</S.Info>
            </S.Wrapper>
          ))}

          <S.Subtitle color={`background-type-${pokemon.types[0].type.name}`}>Training</S.Subtitle>
          {training.map((info, i) => (
            <S.Wrapper key={`training-${i}`}>
              <S.InfoName>{info.infoName}</S.InfoName>
              <S.Info>{info.info}</S.Info>
            </S.Wrapper>
          ))}

          <S.Subtitle color={`background-type-${pokemon.types[0].type.name}`}>Breeding</S.Subtitle>
          {breeding.map((info, i) => (
            <S.Wrapper key={`breeding-${i}`}>
              <S.InfoName>{info.infoName}</S.InfoName>
              <S.Info>{info.info}</S.Info>
            </S.Wrapper>
          ))}

          <S.Subtitle color={`background-type-${pokemon.types[0].type.name}`}>Location</S.Subtitle>
        </>
      )}
    </S.Container>
  )
}
