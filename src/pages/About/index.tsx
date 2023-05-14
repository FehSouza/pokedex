import { dispatchFixedHeader, useFixedHeader } from '../../states'
import { handleScroll } from '../../utils'
import * as S from './styles'

const variants = {
  initial: { y: 100 },
  animate: { y: 0 },
} as const

const transition = { duration: 0.35 } as const

export const About = () => {
  const [fixedHeader] = useFixedHeader()

  return (
    <S.Container
      layout
      layoutId="container-page"
      variants={variants}
      initial="initial"
      animate="animate"
      transition={transition}
      fixedHeader={fixedHeader}
      onScroll={(e) => handleScroll({ e, fixedHeader, dispatchFixedHeader })}
    >
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
      <span>About</span>
    </S.Container>
  )
}
