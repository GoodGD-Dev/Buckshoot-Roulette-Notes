import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type StartProps = {
  color: 'fechim' | 'true'
}

export const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const LabelBase = styled.label<StartProps>`
  text-align: center;
  color: ${({ color }) => (color === 'fechim' ? 'blue' : 'red')};
  text-transform: uppercase;
  font-weight: bold;
`

export const InputBase = styled.input.attrs(() => ({
  type: 'number',
  min: 0,
  max: 9,
  step: 1
}))<StartProps>`
  border: solid 1px
    ${({ color }) => (color === 'fechim' ? variaveis.fechim : variaveis.true)};
  width: 5rem;
  height: 5rem;
  text-align: center;
  color: ${({ color }) =>
    color === 'fechim' ? variaveis.fechim : variaveis.true};
  font-size: 2rem;

  &:focus {
    outline: none;
    border: solid 2px
      ${({ color }) => (color === 'fechim' ? variaveis.fechim : variaveis.true)};
  }
`
