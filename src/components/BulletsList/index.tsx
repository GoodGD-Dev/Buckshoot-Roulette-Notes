import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { BALAS } from '../../utils/enums/index'
import * as S from './style'
import { useEffect, useState } from 'react'

const BulletList = () => {
  const dispatch = useDispatch()

  // Seleciona os itens diretamente do estado do Redux
  const itens = useSelector((state: RootState) => state.generateItems.itens)
  const valorInput1 = useSelector(
    (state: RootState) => state.calcInputs.valorInput1
  )
  const valorInput2 = useSelector(
    (state: RootState) => state.calcInputs.valorInput2
  )

  // Inicializa os estados locais com os valores do Redux
  const [newInput1, setNewInput1] = useState(valorInput1)
  const [newInput2, setNewInput2] = useState(valorInput2)
  const [bulletTotais, setBulletsTotais] = useState(0)
  const [showColor, setShowColor] = useState(true)

  // Sincroniza os valores com o estado do Redux
  useEffect(() => {
    setNewInput1(valorInput1)
    setNewInput2(valorInput2)
  }, [valorInput1, valorInput2])

  useEffect(() => {
    setBulletsTotais(newInput1 + newInput2)
  }, [newInput1, newInput2])

  const chanceReal = Math.round((newInput2 / bulletTotais) * 100)
  const chanceFalsa = Math.round((newInput1 / bulletTotais) * 100)

  const [newBullets, setNewBullets] = useState(bulletTotais)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    // Atualiza os valores com base no tipo de bala
    if (value === 'Fechim') {
      setNewInput1((prev) => prev - 1)
      dispatch({ type: 'UPDATE_VALOR_INPUT1', payload: newInput1 - 1 })
      setBulletsTotais((prev) => prev - 1)
    } else if (value === 'Real') {
      setNewInput2((prev) => prev - 1)
      dispatch({ type: 'UPDATE_VALOR_INPUT2', payload: newInput2 - 1 })
      setNewBullets((prev) => prev - 1)
    }
  }

  return (
    <S.Lista>
      {itens.map((item) => (
        <S.ListaItens key={item.id}>
          <S.Itens color={BALAS.COM}>
            {item.nome} = {chanceReal}% de chance de ser {BALAS.TRUE}
            <S.Span color={item.valorVerdadeiro}>{BALAS.TRUE}</S.Span>
            <S.Check
              name={`bala${item.id}`}
              value={item.valorVerdadeiro}
              color={BALAS.TRUE}
              onChange={handleChange}
            />
            <S.Span color={item.valorFalso}>{BALAS.FECHIM}</S.Span>
            <S.Check
              name={`bala${item.id}`}
              color={BALAS.FECHIM}
              value={item.valorFalso}
              onChange={handleChange}
            />
          </S.Itens>
          <p>
            Selecionado: {newInput1}, {newInput2}
          </p>
        </S.ListaItens>
      ))}
    </S.Lista>
  )
}

export default BulletList
