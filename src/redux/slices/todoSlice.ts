import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { TodoType } from "../../types";


type TodoState = {
    todos:Array<TodoType>
}


type ToggleTodoTypes = {
    id:number,
    isCompleted:boolean
}


const initialState:TodoState={
    todos:[]
}


const todoSlice =createSlice({
    name:"todos",
    initialState,
    reducers:{
      addTodo:(state :TodoState, action:PayloadAction<TodoType>) => {
           state.todos=[action.payload,...state.todos]   
       },
       toggleTodo:(state:TodoState,action:PayloadAction<ToggleTodoTypes> ) => {
                 const index = state.todos.findIndex((item)=>item.id === action.payload.id)

                 if(index!== -1){
                     state.todos[index].completed = action.payload.isCompleted  
                 }
       },
       removeTodo:(state:TodoState,action:PayloadAction<number>)=>{
          state.todos = state.todos.filter((item) => item.id !== action.payload)
       }
    }
}) 


export const {addTodo, toggleTodo, removeTodo} = todoSlice.actions;

export default todoSlice;