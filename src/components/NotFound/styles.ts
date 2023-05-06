import styled from 'styled-components'

export const NotFound = styled.li`
  display: flex;
  flex-direction: column;
`

export const Text = styled.span`
  margin-top: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors['text-grey']};
`
