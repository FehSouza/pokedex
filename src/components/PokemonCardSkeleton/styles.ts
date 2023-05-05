import styled, { keyframes } from 'styled-components'

export const shimmer = keyframes`
  from {
    background-position: -500px 0;
  }
  to {
    background-position: 500px 0;
  }
`
export const PokemonCard = styled.li`
  margin-top: 30px;
  border-radius: 10px;
  height: 120px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`
