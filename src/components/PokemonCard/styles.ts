import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Color } from '../../styles/theme'

export const PokemonCard = styled(motion.li)<{ color: Color }>`
  display: flex;
  margin-top: 95px;
  padding: 0 40px;
  position: relative;
  cursor: pointer;
  opacity: 1 !important;
`

export const WrapperName = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Name = styled(motion.h2)`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  color: ${({ theme }) => theme.colors['text-white']};
  text-transform: capitalize;
  margin-top: 5px;
  z-index: 3;

  @media (max-width: 400px) {
    font-size: 26px;
    line-height: 31px;
  }
`

export const ImageWrapper = styled.div`
  height: 125px;
  aspect-ratio: 1/1;
`

export const Image = styled(motion.img)`
  height: 100%;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;

  @media (max-width: 400px) {
    margin-left: 16px;
  }
`

export const Id = styled(motion.span)`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: ${({ theme }) => theme.colors['text-number']};
`

export const TypesWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
`

export const Type = styled(motion.div)<{ color: Color }>`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 3px;
  z-index: 2;

  svg {
    width: 15px;
    height: 15px;

    path {
      fill: ${({ theme }) => theme.colors['text-white']};
    }
  }
`

export const TypeName = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors['text-white']};
  text-transform: capitalize;
`

export const ShadowWrapper = styled(motion.div)`
  width: 74px;
  height: 32px;
  position: absolute;
  top: 96px;
  right: -16px;

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: ${({ theme }) => theme.colors['gradient-vector']};
    }
  }
`

export const Shadow = styled.div<{ color: Color }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(${({ color, theme }) => `transparent, ${theme.colors[color]}`});
  z-index: 1;
`
