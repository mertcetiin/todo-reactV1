import './App.css';
import List from './components/List';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([])


  return (
    <div className="App">
      <h1>TODOLIST</h1>
      <List
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
