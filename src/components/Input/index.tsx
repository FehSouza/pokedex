import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

interface InputProps {
  placeholder: string
  mt: number
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
}

export const Input = ({ placeholder, mt, iconLeft, iconRight }: InputProps) => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')

  const navigation = () => {
    if (!value) return
    setValue('')
    navigate(`/${value}`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') navigation()
  }

  return (
    <S.Container>
      <S.Wrapper mt={mt}>
        {iconLeft && (
          <S.Button aria-label="button-search" onClick={navigation}>
            {iconLeft}
          </S.Button>
        )}

        <S.Input placeholder={placeholder} value={value} onChange={handleChange} onKeyUp={handleKeyUp} />

        {iconRight && (
          <S.Button aria-label="button-search" onClick={navigation}>
            {iconRight}
          </S.Button>
        )}
      </S.Wrapper>
    </S.Container>
  )
}
