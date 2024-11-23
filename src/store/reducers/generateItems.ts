import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BALAS } from '../../utils/enums'

type Item = {
  id: number
  nome: string
  valorVerdadeiro: BALAS.TRUE
  valorFalso: BALAS.FECHIM
}

type CalcState = {
  itens: Item[]
}

const initialState: CalcState = {
  itens: []
}

const generateItemsSlice = createSlice({
  name: 'generateItems',
  initialState,
  reducers: {
    generateItems: (state, action: PayloadAction<number>) => {
      state.itens = Array.from({ length: action.payload }, (_, index) => ({
        id: index + 1,
        nome: `Bala ${index + 1}`,
        valorVerdadeiro: BALAS.TRUE,
        valorFalso: BALAS.FECHIM
      }))
    }
  }
})

export const { generateItems } = generateItemsSlice.actions
export default generateItemsSlice.reducer
