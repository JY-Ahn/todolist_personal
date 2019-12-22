import React from 'react';
import TodoListElement from './TodoListElement';

const TodoList = (props) => (
    <div id='cp_todolist'>
        {
            props.currentgroupTodoList ?
            props.currentgroupTodoList.map(todo => <TodoListElement todo={todo}/>)
            :
            '그룹을 선택하고 할 일을 작성하세요'
        }
        <input
            type='text'
            id='input_todolisttext'
            placeholder='할 일을 작성하세요'
            onKeyDown={(e) => props.handleAddTodolistElement(e)}></input>
    </div>
)

export default TodoList;