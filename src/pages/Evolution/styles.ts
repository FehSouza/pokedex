import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Color } from '../../styles/theme'

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

export const Subtitle = styled.h3<{ color: Color }>`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme, color }) => theme.colors[color]};
`

export const Evolution = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`

export const LevelWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg path {
    fill: ${({ theme }) => theme.colors['gradient-pokeball']};
  }
`

export const Level = styled.span`
  margin-top: 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.colors['text-black']};
  max-width: 80px;
`

export const withoutEvolution = styled.span`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.colors['text-black']};
`
