import React from 'react';
import DoneList from './DoneList'
const DoneListWrapper = (props) => (

    <div id='cp_donelistwrapper'>
        Done List
        <button>제거된 목록 삭제하기</button>
        <DoneList />
    </div>
)


export default DoneListWrapper;