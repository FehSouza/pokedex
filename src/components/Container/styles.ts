import styled from 'styled-components'
import { Color } from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const Header = styled.header<{ color: Color }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 315px;
  padding-bottom: 30px;
  background-color: ${({ theme, color }) => theme.colors[color]};
  position: relative;
  overflow: hidden;
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
