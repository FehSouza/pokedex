import { transparentize } from 'polished'
import styled from 'styled-components'
import { Color } from '../../styles/theme'

export const Container = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageWrapper = styled.div<{ color: Color; isActive: boolean }>`
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > svg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;

    path {
      fill: ${({ theme, isActive, color }) => (isActive ? transparentize(0.6, theme.colors[color]) : theme.colors['gradient-pokeball'])};
    }
  }
`

export const Image = styled.img`
  width: 75px;
  z-index: 2;
`

export const Id = styled.span`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.colors['text-grey']};
`

export const Name = styled.h4`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.colors['text-black']};
  text-transform: lowercase;
  display: inline-block;

  &::first-letter {
    text-transform: uppercase;
  }
`
