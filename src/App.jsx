import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:"Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id:2,
      text:"Criar HUB de Dados",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id:3,
      text:"Faculade",
      category: "Faculdade",
      isCompleted: false
    }
  ])
  return (
    <>
      <div className="app">
        
      </div>
    </>
  )
}

export default App