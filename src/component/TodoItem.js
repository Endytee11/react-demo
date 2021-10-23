import react from 'react'
import PropTypes from 'prop-types'

const TodoItem = props => {
    //console.log(props)
    const todo = props.TodoProps
    const markCompleted= props.markCompletedFunc

    //style
    const TodoStyle = {
        background:'#f4f4f4',
        padding: '10px',
        borderBottom: '1px solid #ccc',
        textDecoration: todo.complete ? 'line-through' : 'none'
    }

    //return
    return(
        <p style={TodoStyle}>
            <input type="checkbox" onChange={markCompleted.bind(this, todo.id)} checked={todo.complete} />
            {todo.title}
            <button>Delete</button>
            
        </p>
    )
}

//PropTypes
TodoItem.propTypes = {
    todoProps: PropTypes.object.isRequired,
    markCompletedFunc: PropTypes.func.isRequired
}

export default TodoItem