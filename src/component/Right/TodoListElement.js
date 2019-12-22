import React from 'react';


const TodoListElement = (props) => (
    <div id='cp_todolistelement'>
        {props.todo.message}
    </div>
)

export default TodoListElement;