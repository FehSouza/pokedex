import styled from 'styled-components'

export const Logo = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-50%);
  width: 100%;
  z-index: 0;

  & svg {
    width: 100%;
    height: auto;

    & path {
      fill: ${({ theme }) => theme.colors['gradient-pokeball']};
    }
  }
`
