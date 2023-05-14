import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Color } from '../../styles/theme'

export const Container = styled(motion.main)<{ fixedHeader: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ fixedHeader }) => fixedHeader && 'calc(100% - 155px)'};
  position: absolute;
  top: ${({ fixedHeader }) => (fixedHeader ? '155px' : '315px')};
  overflow-y: ${({ fixedHeader }) => (fixedHeader ? 'auto' : 'hidden')};
  border-radius: 30px 30px 0px 0px;
  padding: 40px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors['text-white']};
`

export const Description = styled.p`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.colors['text-grey']};
  margin-bottom: 10px;
`

export const Subtitle = styled.h3<{ color: Color }>`
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme, color }) => theme.colors[color]};
`

export const Wrapper = styled.div`
  margin-top: 15px;
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

export const Info = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.colors['text-grey']};
`
