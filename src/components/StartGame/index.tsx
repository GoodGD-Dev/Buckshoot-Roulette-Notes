import { BALAS } from '../../utils/enums'
import * as S from './style'
import BulletList from '../BulletsList'

const StartGame = () => {
  return (
    <>
      <S.StarContainer>
        <S.InputGroup>
          <S.LabelBase color={BALAS.FECHIM}>{BALAS.FECHIM}</S.LabelBase>
          <S.InputBase color={BALAS.FECHIM} />
        </S.InputGroup>
        <S.InputGroup>
          <S.LabelBase color={BALAS.TRUE}>{BALAS.TRUE}</S.LabelBase>
          <S.InputBase color={BALAS.TRUE} />
        </S.InputGroup>
      </S.StarContainer>
      <S.BtnBase>Start</S.BtnBase>
      <BulletList />
    </>
  )
}

export default StartGame
