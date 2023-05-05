import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 40px;
`

export const Wrapper = styled.div<{ mt: number }>`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  padding: 20px 25px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors['background-default-input']};
  z-index: 1;
  margin-top: ${({ mt }) => `${mt}px`};
  transition-duration: 350ms;

  &:focus-within {
    background-color: ${({ theme }) => theme.colors['background-pressed-input']};
  }

  & svg > path {
    fill: ${({ theme }) => theme.colors['text-grey']};
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`

export const Input = styled.input`
  display: flex;
  height: 100%;
  flex: 1;

  &::placeholder {
    color: ${({ theme }) => theme.colors['text-grey']};
  }
`
