import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { generateItems } from '../../store/reducers/generateItems'
import { setInput1, setInput2 } from '../../store/reducers/calcInputs'
import { BALAS } from '../../utils/enums'
import * as S from './style'
import BulletList from '../BulletsList'

const StartGame = () => {
  const dispatch = useDispatch<AppDispatch>()

  // Acessando os valores dos inputs diretamente do Redux
  const input1 = useSelector((state: RootState) => state.calcInputs.input1)
  const input2 = useSelector((state: RootState) => state.calcInputs.input2)

  // Função para calcular a soma
  function calculaInputs(n1: number, n2: number): number {
    return n1 + n2
  }

  // Função para lidar com a mudança dos inputs
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInput1(Number(e.target.value))) // Atualiza o estado no Redux
  }

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInput2(Number(e.target.value))) // Atualiza o estado no Redux
  }

  // Calcular a soma
  const soma = calculaInputs(input1, input2)

  const gerarItens = () => {
    dispatch(generateItems(soma))
  }

  return (
    <>
      <S.StarContainer>
        <S.InputGroup>
          <S.LabelBase color={BALAS.FECHIM}>{BALAS.FECHIM}</S.LabelBase>
          <S.InputBase
            value={input1} // Valor controlado vindo do Redux
            onChange={handleChange1} // Atualiza o Redux quando o valor mudar
            color={BALAS.FECHIM}
          />
        </S.InputGroup>
        <S.InputGroup>
          <S.LabelBase color={BALAS.TRUE}>{BALAS.TRUE}</S.LabelBase>
          <S.InputBase
            value={input2} // Valor controlado vindo do Redux
            onChange={handleChange2} // Atualiza o Redux quando o valor mudar
            color={BALAS.TRUE}
          />
        </S.InputGroup>
      </S.StarContainer>
      <S.BtnBase onClick={gerarItens}>Start</S.BtnBase>
      <BulletList />
    </>
  )
}

export default StartGame
