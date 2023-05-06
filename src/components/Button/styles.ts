import styled from 'styled-components'

export const Button = styled.button<{ mt: number; select: boolean }>`
  margin-top: ${({ mt }) => `${mt}px`};
  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding: 20px 30px;
  background-color: ${({ theme, select }) => theme.colors[select ? 'type-psychic' : 'background-default-input']};
  box-shadow: ${({ select }) => select && `0px 10px 20px 0px #EA5D604D`};
  color: ${({ theme, select }) => theme.colors[select ? 'text-white' : 'text-grey']};
`
