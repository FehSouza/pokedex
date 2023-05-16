import { BsArrowLeftShort } from 'react-icons/bs'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import { NavbarPages, PokemonCard } from '..'
import { getPokemon } from '../../services'
import * as S from './styles'

export const ContainerInformation = () => {
  const params = useParams()
  const navigate = useNavigate()

  const { data: pokemon } = useSWR(`/pokemon/${params.id}`, () => getPokemon(`/pokemon/${params.id}`))

  const handleNavigateHome = () => (window.history.length <= 2 ? navigate('/') : navigate(-1))

  return (
    <S.Container>
      {pokemon && (
        <S.Header layoutId={`bg-${pokemon.id}`} color={`background-type-${pokemon.types[0].type.name}`}>
          <S.BackHome name="Back to all Pokemon" onClick={handleNavigateHome}>
            <BsArrowLeftShort size={40} />
          </S.BackHome>

          <S.ShadowWrapper>
            <S.Shadow color={`background-type-${pokemon.types[0].type.name}`} />
            <S.ShadowName>{pokemon.name}</S.ShadowName>
          </S.ShadowWrapper>

          <PokemonCard item={pokemon}></PokemonCard>

          <NavbarPages pokemon={pokemon} />
        </S.Header>
      )}
      <Outlet />
    </S.Container>
  )
}
