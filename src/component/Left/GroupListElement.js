import React from 'react';

const GroupListElement = (props) => (
    <div className='cp_grouplistElement' onClick={() => props.handleSelectGroup(props.groupName)}>
        {props.groupName}
    </div>
)

export default GroupListElement;