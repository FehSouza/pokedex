import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled(motion.div)<{ pageInfo?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 10px;
  padding-left: ${({ pageInfo }) => (pageInfo ? '0' : '30px')};
  z-index: 1;
  opacity: ${({ pageInfo }) => (pageInfo ? '0.5 !important' : '1')};

  svg {
    position: absolute;
    top: ${({ pageInfo }) => (pageInfo ? '0' : '-15px')};
    left: 0px;
    width: ${({ pageInfo }) => (pageInfo ? '100%' : 'calc(100% + 30px)')};
    height: ${({ pageInfo }) => (pageInfo ? '100%' : 'calc(100% + 30px)')};

    path {
      fill: ${({ theme }) => theme.colors['gradient-vector']};
    }
  }
`
