import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../../store/slices/todo'

import styles from './index.module.css'

export function AddTodo() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const onInputChange = (evt) => {
    setValue(evt.target.value)
  }

  const handleAddTodo = () => {
    dispatch(addTodo(value))
    setValue('')
  }

  return (
    <div>
      <input type="text" value={value} onChange={onInputChange} />
      <button
        type="button"
        className={styles.addButton}
        onClick={handleAddTodo}
      >
        Add todo
      </button>
    </div>
  )
}

export default AddTodo
