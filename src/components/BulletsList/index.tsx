import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { BALAS } from '../../utils/enums/index'
import * as S from './style'

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

  return (
    <S.Lista>
      {itens.map((item) => (
        <S.ListaItens key={item.id}>
          <S.Itens>
            {item.nome} = {chanceReal}% de chance de ser {BALAS.TRUE}
            <S.Span value={item.valorVerdadeiro}>{BALAS.TRUE}</S.Span>
            <S.Check name={`bala${item.id}`} value={item.valorVerdadeiro} />
            <S.Span value={item.valorFalso}>{BALAS.FECHIM}</S.Span>
            <S.Check name={`bala${item.id}`} value={item.valorFalso} />
          </S.Itens>
          <p>
            Selecionado: {valorInput1}, {valorInput2}
          </p>
        </S.ListaItens>
      ))}
    </S.Lista>
  )
}

export default BulletList
