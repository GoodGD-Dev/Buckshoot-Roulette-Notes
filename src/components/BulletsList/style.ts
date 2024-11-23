import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { BALAS } from '../../utils/enums/index'

type RatioProps = {
  value?: BALAS.FECHIM | BALAS.TRUE
}

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 15fr repeat(4, 1fr);
  margin-top: 3rem;
  padding: 2rem;
  color: ${variaveis.primary};
  text-transform: uppercase;
  border-top: dotted 1px ${variaveis.primary};
`
export const Itens = styled.li`
  margin-bottom: 1rem;
`

export const Span = styled.span<RatioProps>`
  color: ${({ value }) =>
    value === BALAS.FECHIM ? variaveis.fechim : variaveis.true};
`

export const Check = styled.input.attrs(() => ({
  type: 'radio'
}))<RatioProps>`
  appearance: none;
  background-color: ${variaveis.secundary};
  border: solid 2px ${variaveis.primary};
  border-radius: 100%;
  width: 20px;
  height: 20px;
  margin-left: 0.3rem;

  &:checked {
    background-color: ${({ value }) =>
      value === BALAS.FECHIM ? variaveis.fechim : variaveis.true};
  }
`
