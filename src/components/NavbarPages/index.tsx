import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'
import { Pokeball } from '..'
import { PokemonItemProps } from '../../@types/PokemonItem'
import * as S from './styles'

interface NavbarPagesProps {
  pokemon: PokemonItemProps
}

export const NavbarPages = ({ pokemon }: NavbarPagesProps) => {
  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const match = useMatch(location.pathname)

  const itensMenu = ['about', 'stats', 'evolution']
  const [_, currentPage] = location.pathname.split('/')

  const handleNavigate = (page: string) => navigate(`/${page}/${params.id}`, { replace: true })

  return (
    <S.Container>
      {itensMenu.map((item, i) => (
        <S.MenuItem key={i} active={currentPage === item} onClick={() => handleNavigate(item)}>
          {item}
          {!!match && currentPage === item && <Pokeball layoutId={`pokeball-${pokemon.id}`} pageInfo={true} />}
        </S.MenuItem>
      ))}
    </S.Container>
  )
}
