import { BALAS } from '../../utils/enums'
import * as S from './style'

const BulletList = () => {
  return (
    <>
      <S.Lista>
        <S.Itens>Bala 1 = 50% de chance de ser verdadeira</S.Itens>
        <S.Span value={BALAS.TRUE}>Verdadeira</S.Span>
        <S.Check name="test1" value={BALAS.TRUE} />
        <S.Span value={BALAS.FECHIM}>Falsa</S.Span>
        <S.Check name="test1" value={BALAS.FECHIM} />
      </S.Lista>
    </>
  )
}

export default BulletList
