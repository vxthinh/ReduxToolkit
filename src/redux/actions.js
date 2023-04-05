//TODO
export const addTodo = (data) => {
   return {
      type: 'todoList/addTodo',
      payload: data
   }
}
export const toggleTodoStatus = (id) => {
   return {
      type: 'todo/toggleTodoStatus',
      payload:  id
   }
}

//FILTERS
export const searchFilterChange = (text) => {
   // console.log(text)
   return {
      type: 'filters/searchFilterChange',
      payload: text
   }
}

export const statusFilterChange = (status) => {
   return {
      type: 'filters/statusFilterChange',
      payload: status
   }
}

export const prioritiesFilterChange = (priorities) => {
   return {
      type: 'filters/prioritiesFilterChange',
      payload: priorities
   }
}