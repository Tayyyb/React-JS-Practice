import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            // Find the index of the todo item with the given id
            const index = state.todos.findIndex(todo => todo.id === id);
            // If the todo item exists, update its text
            if (index !== -1) {
              state.todos[index].text = newText;
            }
          }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer