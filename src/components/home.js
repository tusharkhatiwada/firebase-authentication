import React, { Component } from "react";
import { db } from "../firebase/config";

import { auth } from "../firebase/config";

export default class Home extends Component {
    state = {
        todo: "",
        todos: []
    };
    componentDidMount() {
        this.getTodosArray();
    }
    getTodosArray = () => {
        const todos = [];
        db.collection("todos")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    todos.push({
                        id: doc.id,
                        todo: doc.data().todo,
                        isCompleted: doc.data().isCompleted
                    });
                });
                this.setState({ todos });
            });
    };
    handleInput = event => {
        this.setState({
            todo: event.target.value
        });
    };
    handleTodoComplete = (id, isCompleted) => {
        const todosRef = db.collection("todos");
        todosRef
            .doc(id)
            .update({
                isCompleted: !isCompleted
            })
            .then(() => {
                this.getTodosArray();
            });
    };
    handleTodoSubmit = e => {
        e.preventDefault();
        const { todo } = this.state;
        db.collection("todos")
            .add({
                todo: todo,
                isCompleted: false
            })
            .then(docRef => {
                console.log("Todo Added: ", docRef);
                this.setState({ todo: "" });
            })
            .catch(err => {
                console.log("Error adding todo: ", err);
            });
    };
    getTodos = () => {
        const { todos } = this.state;
        if (todos.length > 0) {
            return todos.map(todo => {
                return (
                    <div key={todo.todo} className="list-group-item d-flex align-items-center">
                        <h4
                            style={{
                                flex: 4,
                                textDecoration: todo.isCompleted ? "line-through" : "none"
                            }}
                        >
                            {todo.todo}
                        </h4>
                        <input
                            type="checkbox"
                            className="form-control"
                            value={todo.isCompleted}
                            checked={todo.isCompleted}
                            onChange={() => this.handleTodoComplete(todo.id, todo.isCompleted)}
                            style={{ flex: 1 }}
                        />
                    </div>
                );
            });
        } else {
            return <p>No todo items</p>;
        }
    };
    render() {
        const { todo } = this.state;
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ width: "25rem", marginTop: "5em" }}>
                            <h3 className="card-header">Add New Todo Item</h3>
                            <div className="card-body">
                                <form className="form-inline" onSubmit={this.handleTodoSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={todo}
                                            onChange={this.handleInput}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Add Item
                                    </button>
                                </form>
                                <div className="list-group" style={{ marginTop: "2rem" }}>
                                    {this.getTodos()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
