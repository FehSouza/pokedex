import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { Input, Logo, Navbar, PokemonList } from '../../components'
import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <Logo />
      <Navbar />
      <S.Title>Pokédex</S.Title>
      <S.Text>Search for Pokémon by name or using the National Pokédex number.</S.Text>
      <Input placeholder="What Pokémon are you looking for?" mt={25} iconLeft={<SearchIcon />} />
      <PokemonList />
    </S.Container>
  )
}
