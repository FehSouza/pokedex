import { ReactComponent as LogoIcon } from '../../assets/icons/pokeball.svg'
import * as S from './styles'

interface LogoProps {
  menu?: boolean
}

export const Logo = ({ menu }: LogoProps) => {
  return (
    <S.Logo menu={menu}>
      <LogoIcon />
    </S.Logo>
  )
}
