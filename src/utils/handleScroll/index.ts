// import { dispatchFixedHeader, useFixedHeader } from '../../states'

import { SetReStateAction } from '@raulpesilva/re-state/types/core'
import { DispatchReState } from '@raulpesilva/re-state/types/react/types'

interface handleScrollProps {
  e: React.UIEvent<HTMLElement, UIEvent>
  fixedHeader: boolean
  dispatchFixedHeader: DispatchReState<SetReStateAction<boolean>>
}

export const handleScroll = ({ e, fixedHeader, dispatchFixedHeader }: handleScrollProps) => {
  const scrollTop = e.currentTarget.scrollTop
  if (fixedHeader && scrollTop === 0) dispatchFixedHeader(false)
}
