import { AddTodo } from './add-todo'
import { TodoList } from './todo-list'

export function Playlist() {
  return (
    <div>
      <h1>Playlist</h1>

      <AddTodo />
      <TodoList />
    </div>
  )
}

export default Playlist
