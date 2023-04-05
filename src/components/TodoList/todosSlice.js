// const initState = [
//    { id: 1, name: 'Learn React', completed: false, priority: 'Medium' },
//    { id: 2, name: 'Learn Redux', completed: true, priority: 'Medium' },
//    { id: 3, name: 'Learn ReduxToolkit', completed: false, priority: 'Medium' },
// ]

// const todoListReducer = (state = initState, action) => {
//    // console.log({state, action})
//    switch (action.type) {
//       case 'todoList/addTodo':
//          return [
//             ...state,
//             action.payload
//          ]
//       case 'todo/toggleTodoStatus':
//          return state.map(todo =>
//             todo.id === action.payload
//                ? { ...todo, completed: !todo.completed }
//                : todo)
//       default:
//          return state
//    }
// }

// export default todoListReducer

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
   name: 'todoList',
   initialState: { status: 'idle', todos: [] },
   reducers: {
      addTodo: (state, action) => {
         state.push(action.payload)
      },
      toggleTodoStatus: (state, action) => {
         const currentTodo = state.find(todo => todo.id === action.payload)
         if (currentTodo) {
            currentTodo.completed = !currentTodo.completed
         }
      }
   },
   extraReducers: builder => {
      builder
         .addCase(fetchTodos.pending, (state, action) => {
            state.status = 'loading'
         })
         .addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload
            state.status = 'idle'
         })
         .addCase(addNewTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload)
         })
         .addCase(updatedTodo.fulfilled, (state, action) => {
            const currentTodo = state.todos.find(todo => todo.id === action.payload.id)
            if (currentTodo) {
               currentTodo.completed = !currentTodo.completed
            }
         })
   }
})

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
   const res = await fetch('/api/todos')
   const data = await res.json()
   return data.todos
})

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
   const res = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo)
   })
   const data = await res.json()
   return data.todos
})

export const updatedTodo = createAsyncThunk('todos/updateTodo', async (updatedTodo) => {
   const res = await fetch('/api/updateTodo', {
      method: 'POST',
      body: JSON.stringify(updatedTodo)
   })
   const data = await res.json()
   return data.todos
})
export default todosSlice