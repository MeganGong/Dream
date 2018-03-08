import React from 'react';

let input;
const TodoForm = ({ addTodo }) => {
    return (
        <div>
            <input
                type="text"
                ref={node => { input = node; }}
            />
            <button
                onClick={() => {
                    addTodo(input.value);
                    input.value = '';
                    if (input !== null) {
                        input.focus();
                    }
                }}>
                +
            </button>
        </div>


    );
}

export default TodoForm;