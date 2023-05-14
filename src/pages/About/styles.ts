import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.main)<{ fixedHeader: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ fixedHeader }) => fixedHeader && 'calc(100% - 155px)'};
  position: absolute;
  top: ${({ fixedHeader }) => (fixedHeader ? '155px' : '315px')};
  overflow-y: ${({ fixedHeader }) => (fixedHeader ? 'auto' : 'hidden')};
  border-radius: 30px 30px 0px 0px;
  padding: 40px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors['text-white']};
`
