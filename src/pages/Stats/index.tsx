import { dispatchFixedHeader, useFixedHeader } from '../../states'
import { handleScroll } from '../../utils'
import * as S from './styles'

const variants = {
  initial: { y: 100 },
  animate: { y: 0 },
} as const

const transition = { duration: 0.35 } as const

export const Stats = () => {
  const [fixedHeader] = useFixedHeader()

  return (
    <S.Container
      layoutId="container-page"
      layout
      variants={variants}
      initial="initial"
      animate="animate"
      transition={transition}
      fixedHeader={fixedHeader}
      onScroll={(e) => handleScroll({ e, fixedHeader, dispatchFixedHeader })}
    >
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
      <span>Stats</span>
    </S.Container>
  )
}
