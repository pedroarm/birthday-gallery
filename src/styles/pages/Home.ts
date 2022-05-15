import styled from 'styled-components'

interface ITextProps {
  align: 'left' | 'center' | 'right'
}

interface IRowProps {
  justify: 'flex-start' | 'center' | 'flex-end'
}

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 10px;
`

export const Row = styled.div<IRowProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  margin: 1rem 0;
  padding: 0 15px;
`

export const Heading = styled.p`
  text-transform: uppercase;
  font-family: 'Reenie Beanie', cursive;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.neutral.dark.pure};
  margin-bottom: 2rem;
`

export const Text = styled.p<ITextProps>`
  width: 80%;
  font-size: 1.5rem;
  text-align: ${({ align }) => align};
  color: #ffffff;
  font-family: 'Reenie Beanie', cursive;
`
