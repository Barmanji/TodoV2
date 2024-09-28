import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <img
        src='https://w.wallhaven.cc/full/7p/wallhaven-7p5j9y.jpg'
        alt="Todo Illustration"
        className="absolute inset-0 w-full h-full object-cover -z-10" // Fill container while maintaining aspect ratio
      />
      <AddTodo />
      <Todos />
    </>

  )
}

export default App
