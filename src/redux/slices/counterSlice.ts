import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



interface CounterState  {
    value:number
}


// Intial State

const initialState : CounterState = {
    value:0
}




 // Create slice

const counterSlice = createSlice({
        name:"counter",
        initialState,
        reducers:{
              increment : (state)=>{
                    state.value++
              },
              decrement:(state)=>{
                state.value--
              },
              incrementByAmount:(state, action:PayloadAction<number>) => {
                   state.value += action.payload
              }
        }
    })





export const {increment, decrement, incrementByAmount} = counterSlice.actions;


export default counterSlice.reducer

