import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we write our reducer
    
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },

     //Remove todos
     removeTodos:(state, action) => {
        return state.filter((item) => item.id !== action.payload);
     },

     //Update todos
     updateTodos : (state, action) =>{
        return state.map((todo) => {
             if(todo.id === action.payload.id){
                return {
                    ...todo,
                    item: action.payload.item,
                }
             }
        
             return todo;
        })
     },
        //Complete todos
      completeTodos : (state, action) =>{
        return state.map((todo) => {
             if(todo.id === action.payload){
                return {
                    ...todo,
                    completed: true,
                }
             }
        
             return todo;
        })
     }
  },
});



export const { addTodos,removeTodos,updateTodos,completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
