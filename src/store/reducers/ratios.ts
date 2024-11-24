import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RadioState {
  [id: string]: string // Mapeia o ID do radio ao valor selecionado
}

const initialState: RadioState = {}

const radioSlice = createSlice({
  name: 'radios',
  initialState,
  reducers: {
    setRadioValue: (
      state,
      action: PayloadAction<{ id: string; value: string }>
    ) => {
      state[action.payload.id] = action.payload.value
    },
    resetRadios: () => initialState
  }
})

export const { setRadioValue, resetRadios } = radioSlice.actions
export default radioSlice.reducer
