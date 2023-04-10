import React from 'react'

function Todo({ text, todos, setTodos, todo }) {
    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id))
    }
    return (
        <div className='main'>
            <p>{text}</p>
            <button type='submit' onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Todo