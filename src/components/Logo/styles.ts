import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Logo = styled(motion.div)<{ menu?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  transform: ${({ menu }) => (menu ? 'translateY(1)' : 'translateY(-50%)')};
  width: 100%;
  z-index: 0;
  opacity: ${({ menu }) => (menu ? '0.4 !important' : '1')};

  & svg {
    width: 100%;
    height: auto;

    & path {
      fill: ${({ theme }) => theme.colors['gradient-pokeball']};
    }
  }
`
