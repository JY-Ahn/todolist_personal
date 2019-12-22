import React from 'react';
import GroupListElement from './GroupListElement'


const GroupList = (props) => (
    <div id='cp_grouplist'>
        {
            props.grouplist ? 
            props.grouplist.map(group => <GroupListElement groupName={group} handleSelectGroup={props.handleSelectGroup}/>)
            :
            null
        }
        <input type='text' placeholder='새 그룹 이름' onKeyDown={(e) => props.handleMakeGroup(e)}></input>
    </div>
)


export default GroupList;