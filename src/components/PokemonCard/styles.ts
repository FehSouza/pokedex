import styled from 'styled-components'
import { Color } from '../../styles/theme'

export const PokemonCard = styled.li<{ color: Color }>`
  margin-top: 30px;
  display: flex;
  background-color: ${({ theme, color }) => `${theme.colors[color]}`};
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const ImageWrapper = styled.div`
  position: absolute;
  top: -25px;
  right: 10px;
  height: calc(100% + 15px);
  aspect-ratio: 1/1;
  z-index: 1;
`

export const Image = styled.img`
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
