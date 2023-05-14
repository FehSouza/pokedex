import styled from 'styled-components'
import { Color } from '../../styles/theme'
import { motion } from 'framer-motion'

export const Container = styled.div<{ fixedHeader: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: ${({ fixedHeader }) => (fixedHeader ? 'hidden' : 'auto')};
`

export const Header = styled(motion.header)<{ color: Color; fixedHeader: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ fixedHeader }) => (fixedHeader ? '155px' : '315px')};
  padding-bottom: 30px;
  background-color: ${({ theme, color }) => theme.colors[color]};
  position: ${({ fixedHeader }) => (fixedHeader ? 'fixed' : 'relative')};
  overflow: hidden;
`

export const BackHome = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 32px;
  left: 32px;
  z-index: 1;

  & > svg {
    color: ${({ theme }) => theme.colors['text-white']};
  }
`

export const ShadowWrapper = styled.div`
  width: 100%;
  height: 119px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
`

export const Shadow = styled.div<{ color: Color }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(transparent, ${({ color, theme }) => theme.colors[color]});
`

export const ShadowName = styled.span`
  position: absolute;
  font-size: 100px;
  font-weight: 700;
  line-height: 119px;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors['gradient-pokemon-name']};
`

export const PokemonCard = styled.li`
  position: absolute;
  top: 95px;
  display: flex;
  padding: 0 40px;
  box-sizing: border-box;
`

export const ImageWrapper = styled.div`
  height: 125px;
  aspect-ratio: 1/1;
  z-index: 1;
`

export const Image = styled.img`
  height: 100%;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`

export const Id = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  color: ${({ theme }) => theme.colors['text-number']};
`

export const Name = styled.h2`
  margin-top: 5px;
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;
  color: ${({ theme }) => theme.colors['text-white']};
  text-transform: capitalize;
  z-index: 1;
`

export const TypesWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 5px;
`

export const Type = styled.div<{ color: Color }>`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  box-sizing: border-box;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 3px;
  z-index: 1;

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

export const DetailWrapper = styled.div`
  width: 74px;
  height: 32px;
  position: absolute;
  top: 5px;
  left: 100px;

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: ${({ theme }) => theme.colors['gradient-vector']};
    }
  }
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
