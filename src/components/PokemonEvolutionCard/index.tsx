import useSWR from 'swr'
import { ReactComponent as LogoIcon } from '../../assets/icons/pokeball.svg'
import { getPokemon } from '../../services'
import * as S from './styles'

interface PokemonEvolutionCardProps {
  id: string
  name: string
  idActive?: string
}

export const PokemonEvolutionCard = ({ id, name, idActive }: PokemonEvolutionCardProps) => {
  const { data: pokemon } = useSWR(`/pokemon/${id}`, () => getPokemon(`/pokemon/${id}`))
  if (!pokemon) return null

  const idFormatted = id.replace('/', '').padStart(3, '0')
  const isActive = idActive === id.replace('/', '')

  return (
    <S.Container>
      <S.ImageWrapper isActive={isActive} color={`background-type-${pokemon.types[0].type.name}`}>
        <LogoIcon />
        <S.Image src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </S.ImageWrapper>
      <S.Id>{`#${idFormatted}`}</S.Id>
      <S.Name>{name}</S.Name>
    </S.Container>
  )
}
