import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
const[todo,setTodo]=useState("");
const[todoList,setTodoList]=useState([]);

  return (
    <div className="App"> 
      
    <Header></Header> 

    <Form todo={todo}
    setTodo={setTodo}
    todoList={todoList}
    setTodoList={setTodoList}
    ></Form>

    <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
