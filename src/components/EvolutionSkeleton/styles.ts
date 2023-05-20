import styled, { keyframes } from 'styled-components'

export const shimmer = keyframes`
  from {
    background-position: -500px 0;
  }
  to {
    background-position: 500px 0;
  }
`

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`

export const Id = styled.span`
  margin-top: 4px;
  height: 14px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`

export const Name = styled.h4`
  margin-top: 4px;
  height: 19px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`

export const LevelWrapper = styled.div`
  margin-top: 30px;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg path {
    fill: ${({ theme }) => theme.colors['gradient-pokeball']};
  }
`

export const Level = styled.span`
  margin-top: 6px;
  width: 100%;
  height: 14px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`
