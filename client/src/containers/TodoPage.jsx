import React from 'react';
import TodoForm from '../components/TodoForm.jsx';
import TodoList from '../components/TodoList.jsx';
import TodoTitle from '../components/TodoTitle.jsx';

let todoId = 0;

class TodoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodoItem = this.removeTodoItem.bind(this);
    }
    addTodo(val) {
        const todo = { text: val, id: todoId++ };
        this.state.data.push(todo);
        this.setState({ data: this.state.data });
    }
    removeTodoItem(id) {
        const newData = this.state.data.filter((todo) => {
            if (todo.id !== id) return todo
        });
        this.setState({ data: newData });
    }

    render() {
        return (
            <div className="container">
                <TodoTitle todoCount={this.state.data.length}/>
                <TodoForm
                    addTodo={this.addTodo}
                />
                <TodoList
                    todos={this.state.data}
                    removeTodoItem={this.removeTodoItem}
                />
            </div>
        );
    }
}

export default TodoPage;