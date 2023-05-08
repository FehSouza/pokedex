import * as S from './styles'
import { ReactComponent as LogoIcon } from '../../assets/icons/pokeball.svg'

export const Pokeball = ({ layoutId }: { layoutId: string }) => {
  return (
    <S.Wrapper layoutId={layoutId}>
      <LogoIcon />
    </S.Wrapper>
  )
}
