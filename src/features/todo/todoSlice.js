import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	todos: [] // Start with an empty array
}


export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				text: action.payload,
				completed: false
			}
			state.todos.unshift(todo);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		updateTodo: (state, action) => {
			// Update a specific todo's `completed` state
			const { id, completed } = action.payload;
			const todo = state.todos.find((todo) => todo.id === id);
			if (todo) {
				todo.completed = completed;
			}
		},

		editTodo: (state, action) => {
			const { id, text } = action.payload;
			const todo = state.todos.find(todo => todo.id === id);
			if (todo) {
				todo.text = text; // Update the text of the todo
			}
		}

	}
}
)

export const { addTodo, removeTodo, updateTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
