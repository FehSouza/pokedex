import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.main)`
  width: 100%;
  height: calc(100% - 315px);
  position: absolute;
  top: 315px;
  padding-top: 40px;
  box-sizing: border-box;
  border-radius: 30px 30px 0px 0px;
  background-color: ${({ theme }) => theme.colors['text-white']};
`

export const Content = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 40px;
  padding-top: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`
