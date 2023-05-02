import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
`

export const Title = styled.h1`
  margin-top: 35px;
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  text-align: left;
  z-index: 1;
`

export const Text = styled.span`
  margin-top: 10px;
  text-align: left;
  color: ${({ theme }) => theme.colors['text-grey']};
  z-index: 1;
`
