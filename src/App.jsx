import { useState } from "react"
import { Button, CssBaseline } from "@mui/material"

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
    <CssBaseline>
      <div className="app">
        <h1>TO - DO List</h1>
        <div className="todo-list">
          {todos.map((todos) => (
            <div className="to-do">
              <div className="content">
                <p>{todos.text}</p>
                <span className="category">
                  ({todos.category})
                </span>
                <div className="btn-group">
                    <Button variant="contained" color="success">Completar</Button>
                    <Button variant="contained" color="error">X</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </CssBaseline>
    </>
  )
}

export default App