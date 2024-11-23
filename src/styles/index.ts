import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    background-color: ${variaveis.background};
  }

`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  border: dotted 1px ${variaveis.primary};
  height: 95vh;
  width: 95vw;
  margin-top: 2vh;
  text-align: center;
`

export default EstiloGlobal
