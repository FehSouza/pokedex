import { ReactComponent as Arrow } from '../../assets/icons/Arrow.svg'
import * as S from './styles'

export const EvolutionSkeleton = () => {
  return (
    <S.Container>
      <S.Card>
        <S.Image />
        <S.Id />
        <S.Name />
      </S.Card>

      <S.LevelWrapper>
        <Arrow />
        <S.Level />
      </S.LevelWrapper>

      <S.Card>
        <S.Image />
        <S.Id />
        <S.Name />
      </S.Card>
    </S.Container>
  )
}
