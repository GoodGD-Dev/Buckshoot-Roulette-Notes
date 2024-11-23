import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InputsState = {
  input1: number
  input2: number
  resultado: number
}

const initialState: InputsState = {
  input1: 0,
  input2: 0,
  resultado: 0
}

const inputsSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    setInput1(state, action: PayloadAction<number>) {
      state.input1 = action.payload
      state.resultado = state.input1 + state.input2 // Atualiza o resultado quando input1 mudar
    },
    setInput2(state, action: PayloadAction<number>) {
      state.input2 = action.payload
      state.resultado = state.input1 + state.input2 // Atualiza o resultado quando input2 mudar
    },
    calcularResultado(state) {
      state.resultado = state.input1 + state.input2 // Ação de calcular a soma
    }
  }
})

export const { setInput1, setInput2, calcularResultado } = inputsSlice.actions
export default inputsSlice.reducer
