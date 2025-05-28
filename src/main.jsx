import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todo from './component/Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
  </StrictMode>,
)
