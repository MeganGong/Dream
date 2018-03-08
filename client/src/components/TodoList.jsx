import React from 'react';

const TodoList = ({ todos, removeTodoItem }) => {
    const todoNode = todos.map((todo) => (
        <li 
            key={todo.id}
            onClick={() => removeTodoItem(todo.id)}>{todo.text}</li>
    )
    );
    return (
        <ul>{todoNode}</ul>
    );
}

export default TodoList;