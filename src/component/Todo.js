import react, { Fragment, useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
    const [TodoState, setTodoState] = useState([
        {
            id: 1,
            title: 'viec 1',
            complete: true,
        },
        {
            id: 2,
            title: 'viec 2',
            complete: false,
        },
        {
            id: 3,
            title: 'viec 3',
            complete: false,
        }
    ])

    const markCompleted = id => {
        const newTodos = TodoState.map(Todo => {
            if (Todo.id === id) Todo.complete = !Todo.complete
            return Todo
        })
        setTodoState(newTodos)
    }

    return(
        <Fragment>
            {TodoState.map(Todo => {
                return (
                <p><TodoItem key={Todo.id} TodoProps={Todo} markCompletedFunc={markCompleted} /></p>
                )
            })}
        </Fragment>
    )
}

export default Todo