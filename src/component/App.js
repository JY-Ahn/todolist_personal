import React from 'react';
import InformationLeft from './Left/InformationLeft'
import InformationRight from './Right/InformationRight'

class App extends React.Component{
  constructor(props){
    super(props);
    this.handleMakeGroup = this.handleMakeGroup.bind(this);
    this.handleSelectGroup = this.handleSelectGroup.bind(this);
    this.handleSearchTodoList = this.handleSearchTodoList.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
    this.handleAddTodolistElement = this.handleAddTodolistElement.bind(this);
    this.state = {
      list : null,
      currentgroup : null,
      grouplist : null,
      currentgroupTodoList: null
    }
  }

  handleMakeGroup(e){
    if(CheckEnter(e)){
      if(this.state.grouplist){
        this.setState({
          grouplist: this.state.grouplist.concat([e.target.value])
        })
      }else{
        this.setState({
          grouplist: [e.target.value]
        })
      }
      
    }
  }
  handleSelectGroup(groupname){
    console.log(groupname);
    //currentgroupTodoList 바꿔줘야 한다
    let newlist = [];
    if(this.state.list){
      newlist = this.state.list.filter(TodolistElement => TodolistElement.group === groupname);
      this.setState({
        currentgroup:groupname,
        currentgroupTodoList : newlist
      })
    }else{
      this.setState({
        currentgroup:groupname
      })
    }
    
  }
  handleSearchTodoList(e){
    console.log(e.target.value);
  }
  handleShowAll(){
    console.log('Button is working');
  }
  handleAddTodolistElement(e){
    if(CheckEnter(e)){
      //currentgroupTodoList를 수정해준다
      let newElement = {
        message: e.target.value,
        group: this.state.currentgroup
      }

      if(this.state.currentgroupTodoList){
        this.setState({
          list: this.state.list.concat(newElement),
          currentgroupTodoList: this.state.currentgroupTodoList.concat(newElement)
        })
      }
      else{
        if(this.state.list){
          this.setState({
            list: this.state.list.concat(newElement),
            currentgroupTodoList: [newElement]
          })
        }else{
          this.setState({
            list: [newElement],
            currentgroupTodoList: [newElement]
          })
        }
      }
      
    }
  }
  render(){
    let state = this.state;
    console.log(state);
    return(
      <div id='app'>
        <InformationLeft
            grouplist={state.grouplist}
            currentgroup={state.currentgroup}
            handleMakeGroup={this.handleMakeGroup}
            handleSelectGroup={this.handleSelectGroup}
            handleSearchTodoList={this.handleSearchTodoList}
            handleShowAll={this.handleShowAll}/>
        <InformationRight
            currentgroup={state.currentgroup}
            currentgroupTodoList={state.currentgroupTodoList}
            handleAddTodolistElement={this.handleAddTodolistElement}/>
      </div>
    )
  }
}


function CheckEnter(e){
  return e.keyCode===13 ? true : false
}
export default App;
