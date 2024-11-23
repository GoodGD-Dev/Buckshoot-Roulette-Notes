import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { BALAS } from '../../utils/enums/index'

type StartProps = {
  color: BALAS.FECHIM | BALAS.TRUE
}

export const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1vw;
  margin-top: 5vh;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const LabelBase = styled.label<StartProps>`
  text-align: center;
  color: ${({ color }) =>
    color === BALAS.FECHIM ? variaveis.fechim : variaveis.true};
  text-transform: uppercase;
  font-weight: bold;
`

export const InputBase = styled.input.attrs(() => ({
  type: 'number',
  min: 0,
  max: 6,
  step: 1
}))<StartProps>`
  border: solid 1px
    ${({ color }) =>
      color === BALAS.FECHIM ? variaveis.fechim : variaveis.true};
  width: 5vw;
  height: 5vh;
  min-width: 70px;
  min-height: 70px;
  max-width: 95px;
  max-height: 95px;
  padding: 1vh;
  text-align: center;
  color: ${({ color }) =>
    color === BALAS.FECHIM ? variaveis.fechim : variaveis.true};
  font-size: 2rem;

  &:focus {
    outline: none;
    border: solid 2px
      ${({ color }) =>
        color === BALAS.FECHIM ? variaveis.fechim : variaveis.true};
  }
`

export const BtnBase = styled.button`
  outline: none;
  border: none;
  border: solid 1px ${variaveis.primary};
  color: ${variaveis.primary};
  font-size: 1rem;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1.5rem;

  &:hover {
    background-color: ${variaveis.primary};
    color: ${variaveis.secundary};
  }
`
