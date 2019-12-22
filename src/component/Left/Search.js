import React from 'react';

const Search = (props) => (
    <div id='cp_search'>
        <input type='text' placeholder='검색어를 입력하세요' onKeyDown={(e) => props.handleSearchTodoList(e)}></input>
    </div>
)


export default Search;