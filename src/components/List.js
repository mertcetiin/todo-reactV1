import React from 'react'

function List({ inputText, setInputText, todos, setTodos }) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, id: Math.random() }]);
        setInputText('');
    }

    return (
        <div className='container'>
            <input value={inputText} type='text' onChange={inputTextHandler}></input>
            <button type='submit' onClick={submitTodoHandler}>Add</button>
        </div>
    )
}

export default List