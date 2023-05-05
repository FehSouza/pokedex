import * as S from './styles'

interface InputProps {
  placeholder: string
  mt: number
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
}

export const Input = ({ placeholder, mt, iconLeft, iconRight }: InputProps) => {
  return (
    <S.Container>
      <S.Wrapper mt={mt}>
        {iconLeft && iconLeft}
        <S.Input placeholder={placeholder} />
        {iconRight && iconRight}
      </S.Wrapper>
    </S.Container>
  )
}
