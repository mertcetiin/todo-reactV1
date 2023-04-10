import React from 'react'
import Todo from './Todo'

function TodoList({ todos, setTodos }) {
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <Todo
                        text={todo.text.toUpperCase()}
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList