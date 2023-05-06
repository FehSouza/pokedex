import * as S from './styles.ts'

interface ButtonProps {
  text: string
  mt: number
  select: boolean
  nameButton: string
  onClick: () => void
}

export const Button = ({ text, mt, select, nameButton, onClick }: ButtonProps) => {
  return (
    <S.Button mt={mt} select={select} name={nameButton} onClick={onClick}>
      {text}
    </S.Button>
  )
}
