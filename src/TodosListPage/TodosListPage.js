import React, { Component } from 'react'
import { addTodo } from '../api-utils';
import { getTodos } from '../api-utils.js'

export default class TodosListPage extends Component {
    state = {
        todos: [],
        todo: '',
    }

    componentDidMount = async () =>{
        await this.fetchTodos();
    }

    fetchTodos = async () => {
        const todos = await getTodos(this.props.user.token);
        this.setState({todos});
    }
    handleSubmit = async e => {
        e.preventDefault();
        console.log(this.state.todo);

        await addTodo(this.state.todo, this.props.user.token);
        console.log(this.state.todo);
        await this.fetchTodos();
        this.setState({todo: ''});
   
    }

    handleTodoChange = e => this.setState({todo: e.target.value})

    render() {
       
        return (
            <>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.todo.todo} onChange={this.handleTodoChange}/>
                        <button>Add new todo</button>
                    </form>
                    {!this.state.todos.length && <p>Great job staying on top of things!</p>}
                    {this.state.todos.map(todo => 
                        <p>{todo.todo} : {todo.completed? 'Done!' : 'still working on it'} </p> )}
                </div>
            </>
        )
    }
}
