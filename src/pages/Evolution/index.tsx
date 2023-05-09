import * as S from './styles'

const variants = {
  initial: { y: 100 },
  animate: { y: 0 },
} as const

const transition = { duration: 0.35 } as const

export const Evolution = () => {
  return (
    <S.Container layoutId="container-page" layout variants={variants} initial="initial" animate="animate" transition={transition}>
      <span>Evolution</span>
    </S.Container>
  )
}
