import { Express } from 'express'
import { Todo } from '@afrilaser/data'

const todos: Todo[] = [{title: "api todo 1"}, {title: "api todo 2"}]

export const addTodoRoutes = (app: Express) => {
    app.get('/api/todos', (req, res) => res.send(todos))
    app.post('/api/addTodo', (req, res) => {
        const newTodo = {
            title: `New api todo ${Math.floor(Math.random() * 1000)}`

        }
        todos.push(newTodo)
        res.send(newTodo)
    })
}