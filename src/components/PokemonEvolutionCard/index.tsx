import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import { cache } from 'swr/_internal'
import { ReactComponent as LogoIcon } from '../../assets/icons/pokeball.svg'
import { getPokemon } from '../../services'
import * as S from './styles'

interface PokemonEvolutionCardProps {
  id: string
  name: string
  idActive?: string
}

export const PokemonEvolutionCard = ({ id, name, idActive }: PokemonEvolutionCardProps) => {
  const navigate = useNavigate()

  const { data: pokemon } = useSWR(`/pokemon/${id}`, () => getPokemon(`/pokemon/${id}`))
  if (!pokemon) return null

  const idFormatted = String(pokemon.id).padStart(3, '0')
  const isActive = idActive === String(pokemon.id)

  const handleNavigate = async (id: number) => {
    const data = await getPokemon(`/pokemon/${id}`)
    cache.set(`/pokemon/${id}`, { data })
    navigate(`/evolution/${id}`)
  }

  return (
    <S.Container onClick={() => handleNavigate(pokemon.id)}>
      <S.ImageWrapper isActive={isActive} color={`background-type-${pokemon.types[0].type.name}`}>
        <LogoIcon />
        <S.Image src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </S.ImageWrapper>
      <S.Id>{`#${idFormatted}`}</S.Id>
      <S.Name>{name}</S.Name>
    </S.Container>
  )
}
