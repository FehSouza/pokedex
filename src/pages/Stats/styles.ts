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
`

export const Subtitle = styled.h3<{ color: Color }>`
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
  width: 92px;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.colors['text-black']};
  text-transform: capitalize;
`

export const Info = styled.span`
  width: 32px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: right;
  color: ${({ theme }) => theme.colors['text-grey']};
`

export const Status = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['background-default-input']};
`

export const StatusInt = styled.div<{ color: Color; value: number }>`
  width: ${({ value }) => `calc((100% * ${value}) / 250)`};
  height: 100%;
  border-radius: 2px;
  background-color: ${({ theme, color }) => theme.colors[color]};
`
