import React from 'react';
import DoneListWrapper from './DoneListWrapper';
import TodoList from './TodoList';

const InformationRight = (props) => (
    <div id='cp_informationright'>
        Current Group : {props.currentgroup ? props.currentgroup : '그룹을 선택하세요'}
        <DoneListWrapper />
        <TodoList
            currentgroupTodoList={props.currentgroupTodoList}
            handleAddTodolistElement={props.handleAddTodolistElement}/>
    </div>
)

export default InformationRight;