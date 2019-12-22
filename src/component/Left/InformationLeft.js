import React from 'react';
import Navigation from './Navigation'
import GroupList from './GroupList'

const InformationLeft = (props) => (
    <div id='cp_informationleft'>
        <Navigation
            handleSearchTodoList={props.handleSearchTodoList}
            handleShowAll={props.handleShowAll}/>
        <GroupList
            grouplist={props.grouplist}
            currentgroup={props.currentgroup}
            handleMakeGroup={props.handleMakeGroup}
            handleSelectGroup={props.handleSelectGroup}/>
    </div>
)


export default InformationLeft;