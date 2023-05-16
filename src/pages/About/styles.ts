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

export const Description = styled.p`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.colors['text-grey']};
`

export const Subtitle = styled.h3<{ color: Color }>`
  margin-top: 32px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme, color }) => theme.colors[color]};
`

export const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const InfoName = styled.span`
  width: 88px;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.colors['text-black']};
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Info = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.colors['text-grey']};
  display: inline-block;

  &::first-letter {
    text-transform: uppercase;
  }
`
