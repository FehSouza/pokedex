import styled from 'styled-components'
import { Color } from '../../styles/theme'
import { motion } from 'framer-motion'

export const PokemonCard = styled(motion.li)<{ color: Color; pageInfo?: boolean }>`
  display: flex;
  flex-direction: ${({ pageInfo }) => (pageInfo ? 'row-reverse' : 'row')};
  justify-content: ${({ pageInfo }) => (pageInfo ? 'flex-end' : 'flex-start')};
  margin-top: ${({ pageInfo }) => (pageInfo ? '95px' : '30px')};
  padding: ${({ pageInfo }) => (pageInfo ? '0 40px' : '20px')};
  border-radius: 10px;
  background-color: ${({ theme, color, pageInfo }) => `${pageInfo ? 'transparent' : theme.colors[color]}`};
  position: relative;
  cursor: pointer;
  opacity: 1 !important;
`

export const InfoWrapper = styled.div<{ pageInfo?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ pageInfo }) => (pageInfo ? 'center' : 'flex-start')};
  margin-left: ${({ pageInfo }) => (pageInfo ? '25px' : '0px')};

  @media (max-width: 400px) {
    margin-left: ${({ pageInfo }) => (pageInfo ? '16px' : '0px')};
  }
`

export const Id = styled(motion.span)<{ pageInfo?: boolean }>`
  font-size: ${({ pageInfo }) => (pageInfo ? '16px' : '12px')};
  font-weight: 700;
  line-height: ${({ pageInfo }) => (pageInfo ? '19px' : '14px')};
  color: ${({ theme }) => theme.colors['text-number']};
`

export const Name = styled(motion.h2)<{ pageInfo?: boolean }>`
  font-size: ${({ pageInfo }) => (pageInfo ? '32px' : '26px')};
  font-weight: 700;
  line-height: ${({ pageInfo }) => (pageInfo ? '38px' : '31px')};
  color: ${({ theme }) => theme.colors['text-white']};
  text-transform: capitalize;
  margin-top: 5px;
  z-index: 3;

  @media (max-width: 400px) {
    font-size: 26px;
    line-height: 31px;
  }
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
  z-index: 3;

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

export const ShadowWrapper = styled.div<{ pageInfo?: boolean }>`
  width: ${({ pageInfo }) => (pageInfo ? '140px' : '74px')};
  height: ${({ pageInfo }) => (pageInfo ? '65px' : '32px')};
  position: absolute;
  top: ${({ pageInfo }) => (pageInfo ? '92px' : '5px')};
  left: ${({ pageInfo }) => (pageInfo ? 'unset' : '100px')};
  right: ${({ pageInfo }) => (pageInfo ? '-75px' : 'unset')};

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: ${({ theme }) => theme.colors['gradient-vector']};
    }
  }
`

export const Shadow = styled.div<{ pageInfo?: boolean; color: Color; invert?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    ${({ invert, color, theme }) => (invert ? `${theme.colors[color]}, transparent` : `transparent, ${theme.colors[color]}`)}
  );
  z-index: 1;
`

export const ImageWrapper = styled.div<{ pageInfo?: boolean }>`
  position: ${({ pageInfo }) => (pageInfo ? 'unset' : 'absolute')};
  top: -25px;
  right: 10px;
  height: ${({ pageInfo }) => (pageInfo ? '125px' : 'calc(100% + 15px)')};
  aspect-ratio: 1/1;
  z-index: 2;
`

export const Image = styled(motion.img)`
  height: 100%;
`

export const LogoWrapper = styled.div`
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
