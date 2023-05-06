import { Button } from '..'
import * as S from './styles'

interface NotFoundProps {
  onClick: () => void
}

export const NotFound = ({ onClick }: NotFoundProps) => {
  return (
    <S.NotFound>
      <S.Text>Could not find a Pokemon.</S.Text>
      <S.Text>Check that the word is spelled correctly or that the National Pokédex number is correct, and do a new search.</S.Text>
      <Button text="Back to all Pokemon" mt={45} select={true} nameButton="Back to home" onClick={onClick} />
    </S.NotFound>
  )
}
