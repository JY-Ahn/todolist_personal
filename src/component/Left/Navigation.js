import React from 'react';
import Search from './Search'

const Navigation = (props) => (
    <div id='cp_navigation'>
        <Search handleSearchTodoList={props.handleSearchTodoList}/>
        <button onClick={props.handleShowAll}>Show All</button>
    </div>
)


export default Navigation;