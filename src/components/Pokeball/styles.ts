import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 10px;
  padding-left: 30px;
  z-index: 1;

  svg {
    position: absolute;
    top: -15px;
    left: 0px;
    width: calc(100% + 30px);
    height: calc(100% + 30px);

    path {
      fill: ${({ theme }) => theme.colors['gradient-vector']};
    }
  }
`
