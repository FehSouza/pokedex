import styled from 'styled-components'

export const PokemonList = styled.ul`
  margin-top: 15px;
  overflow-y: auto;
  z-index: 1;
  padding: 40px;
  padding-top: 0;
`

export const NotFound = styled.li`
  display: flex;
  flex-direction: column;
`

export const Text = styled.span`
  margin-top: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors['text-grey']};
`

export const Button = styled.button`
  margin-top: 30px;
`
