import { BsArrowLeftShort } from 'react-icons/bs'
import { Outlet, useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import { PokemonCard } from '..'
import { getPokemon } from '../../services'
import { Pokeball } from '../Pokeball'
import * as S from './styles'

export const Container = () => {
  const params = useParams()
  const { data: pokemon } = useSWR(`/pokemon/${params.id}`, () => getPokemon(`/pokemon/${params.id}`))
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigateHome = () => (window.history.length <= 2 ? navigate('/') : navigate(-1))
  const handleNavigate = (page: string) => navigate(`/${page}/${params.id}`, { replace: true })

  const itensMenu = ['about', 'stats', 'evolution']
  const [_, currentPage] = location.pathname.split('/')

  const match = useMatch(location.pathname)

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

          <S.Menu>
            {itensMenu.map((item, i) => (
              <S.MenuItem key={i} active={currentPage === item} onClick={() => handleNavigate(item)}>
                {item}
                {!!match && currentPage === item && <Pokeball layoutId={`pokeball-${pokemon.id}`} pageInfo={true} />}
              </S.MenuItem>
            ))}
          </S.Menu>
        </S.Header>
      )}
      <Outlet />
    </S.Container>
  )
}
