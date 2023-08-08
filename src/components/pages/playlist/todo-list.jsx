import { useSelector, useDispatch } from 'react-redux'
import { todosSelector } from '../../../store/selectors/todo'
import { Todo } from './todo'
import { filters, filterBy } from '../../../store/slices/todo'

import styles from './index.module.css'

export function TodoList() {
  const todos = useSelector(todosSelector)
  const filter = useSelector((state) => state.todo.filterBy)

  const dispatch = useDispatch()

  const filteredTodo = () => {
    if (filter === filters.DONE) {
      return todos.filter((todo) => todo.completed)
    }
    if (filter === filters.ACTIVE) {
      return todos.filter((todo) => !todo.completed)
    }
    // if none of above return all todos
    return todos
  }

  return (
    <>
      <button type="button" onClick={() => dispatch(filterBy(filters.ACTIVE))}>
        👋Active
      </button>
      <button type="button" onClick={() => dispatch(filterBy(filters.DONE))}>
        ✅Done
      </button>
      <button type="button" onClick={() => dispatch(filterBy(filters.ALL))}>
        ❗All
      </button>
      <ul className={styles.list}>
        {/* {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))} */}
        {filteredTodo().map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
