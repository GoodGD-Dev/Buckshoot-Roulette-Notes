import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { BALAS } from '../../utils/enums/index'

type RatioProps = {
  color?: BALAS.FECHIM | BALAS.TRUE
}

type ItemProps = {
  color?: BALAS.SEM | BALAS.COM
}

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3rem;
  padding: 2rem;
  color: ${variaveis.primary};
  text-transform: uppercase;
  border-top: dotted 1px ${variaveis.primary};
`

export const ListaItens = styled(Lista)`
  margin-top: 0px;
  padding: 0.28rem;
  border-bottom: dotted 1px ${variaveis.primary};
`
export const Itens = styled.li<ItemProps>`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 15fr repeat(4, 1fr);
  color: ${({ color }) =>
    color === BALAS.SEM ? variaveis.secundary : variaveis.primary};
`

export const Span = styled.span<RatioProps>`
  color: ${({ color }) =>
    color === BALAS.FECHIM ? variaveis.fechim : variaveis.true};
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
  cursor: pointer;

  &:checked {
    background-color: ${({ color }) =>
      color === BALAS.FECHIM ? variaveis.fechim : variaveis.true};
  }
`
