import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 19px;
  box-sizing: border-box;
  position: absolute;
  bottom: -20px;
`

export const MenuItem = styled.button<{ active: boolean }>`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  padding-top: 16px;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  line-height: 19px;
  color: ${({ theme }) => theme.colors['text-white']};
  text-transform: capitalize;
  opacity: ${({ active }) => (active ? '1' : '0.5')};
  position: relative;
`
