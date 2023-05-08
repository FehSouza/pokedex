import { useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { Input, Logo, Navbar, PokemonList } from '../../components'
import * as S from './styles'

export const Home = () => {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')
  const [_, setSearchParams] = useSearchParams()

  const handleNavigateHome = () => navigate('/')

  const navigation = () => {
    if (!value) return
    setValue('')
    setSearchParams(new URLSearchParams({ q: value }))
    inputRef.current?.blur()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') navigation()
  }

  return (
    <S.Container>
      <Logo />
      <Navbar />
      <S.Title onClick={handleNavigateHome}>Pokédex</S.Title>
      <S.Text>Search for Pokémon by name or using the National Pokédex number.</S.Text>
      <Input
        ref={inputRef}
        placeholder="What Pokémon are you looking for?"
        value={value}
        mt={25}
        iconLeft={<SearchIcon />}
        onClick={navigation}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <PokemonList />
    </S.Container>
  )
}
