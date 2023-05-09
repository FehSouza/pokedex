import { ReactComponent as LogoIcon } from '../../assets/icons/pokeball.svg'
import * as S from './styles'

interface PokeballProps {
  layoutId: string
  pageInfo?: boolean
}

export const Pokeball = ({ layoutId, pageInfo }: PokeballProps) => {
  return (
    <S.Wrapper layoutId={layoutId} pageInfo={pageInfo}>
      <LogoIcon />
    </S.Wrapper>
  )
}
