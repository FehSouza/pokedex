import { createReStateMethods } from '@raulpesilva/re-state'

const fixedHeaderKey = 'fixedHeader'
const initialValue = false

export const { useFixedHeader, dispatchFixedHeader } = createReStateMethods(fixedHeaderKey, initialValue)
