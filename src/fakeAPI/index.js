import { createServer, Model } from 'miragejs';

export const setupServer = () => {
   let server = createServer({
      models: {
         todos: Model,
         filters: Model
      },
      routes() {
         this.get('/api/todos', schema => {
            return schema.todos.all()
         })
         //Add new Todo
         this.post('/api/todos', (scheme, request) => {
            const payload = JSON.parse(request.requestBody)
            return scheme.todos.create(payload)
         })
         // Toggle todo status
         this.post('/api/updateTodo', (scheme, request) => {
            const id = JSON.parse(request.requestBody)
            const currentTodo = scheme.todos.find(id)
            // console.log(currentTodo)

            currentTodo.update({ completed: !currentTodo.completed })
            return currentTodo
         })
         // FILTERS
         this.post('/api/statusFilter', (scheme, request) => {
            const payload = JSON.parse(request.requestBody)
            return scheme.filters.create(payload)
         })
         this.post('/api/prioritiesFilter', (scheme, request) => {
            const payload = JSON.parse(request.requestBody)
            return scheme.filters.create(payload)
         })
      }
   })
}