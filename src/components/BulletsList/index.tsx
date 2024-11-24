import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { BALAS } from '../../utils/enums/index'
import * as S from './style'
import { useState } from 'react'

const BulletList = () => {
  // Seleciona os itens diretamente do estado do Redux
  const itens = useSelector((state: RootState) => state.generateItems.itens)
  const valorInput1 = useSelector(
    (state: RootState) => state.calcInputs.valorInput1
  )
  const valorInput2 = useSelector(
    (state: RootState) => state.calcInputs.valorInput2
  )

  const bulletTotais = itens.length
  const chanceReal = Math.round((valorInput1 / bulletTotais) * 100)
  const chanceFalsa = Math.round((valorInput2 / bulletTotais) * 100)

  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  // Função para manipular a mudança de seleção
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

  // Função para resetar a seleção dos radio buttons
  const handleReset = () => {
    setSelectedOption(null)
    console.log(selectedOption)
  }

  return (
    <S.Lista>
      {itens.map((item) => (
        <S.ListaItens key={item.id}>
          <S.Itens>
            {item.nome} = {chanceReal}% de chance de ser {BALAS.TRUE}
            <S.Span color={item.valorVerdadeiro}>{BALAS.TRUE}</S.Span>
            <S.Check
              name={`bala${item.id}`}
              value={item.valorVerdadeiro + item.id}
              color={BALAS.TRUE}
              checked={selectedOption === item.valorVerdadeiro + item.id}
              onChange={handleRadioChange}
            />
            <S.Span color={item.valorFalso}>{BALAS.FECHIM}</S.Span>
            <S.Check
              name={`bala${item.id}`}
              color={BALAS.FECHIM}
              value={item.valorFalso + item.id}
              checked={selectedOption === item.valorFalso + item.id}
              onChange={handleRadioChange}
            />
          </S.Itens>
          <p>
            Selecionado: {valorInput1}, {valorInput2}
          </p>
        </S.ListaItens>
      ))}
      <button onClick={handleReset}>Resetar Seleção</button>
    </S.Lista>
  )
}

export default BulletList
