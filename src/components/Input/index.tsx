import * as S from './styles'
import { forwardRef } from 'react'

interface InputProps {
  placeholder: string
  value: string
  mt: number
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  onClick: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, value, mt, iconLeft, iconRight, onClick, onChange, onKeyUp }, ref) => {
    return (
      <S.Container>
        <S.Wrapper mt={mt}>
          {iconLeft && (
            <S.Button aria-label="button-search" onClick={onClick}>
              {iconLeft}
            </S.Button>
          )}

          <S.Input ref={ref} placeholder={placeholder} value={value} onChange={onChange} onKeyUp={onKeyUp} />

          {iconRight && (
            <S.Button aria-label="button-search" onClick={onClick}>
              {iconRight}
            </S.Button>
          )}
        </S.Wrapper>
      </S.Container>
    )
  }
)
