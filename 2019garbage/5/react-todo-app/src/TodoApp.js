import React from 'react';
//import logo from './logo.svg';
import './App.css';

class TodoApp extends React.Component { 
  constructor(props){
    super(props) //只要写了 extends 就要用 super
    this.state = {
      showingCategory:'all',
      todos:[{
        done:false,
        content:'eat'
      },{
        done:true,
        content:'drink',
      },{
        done:false,
        content:'sleep',
      }]
    }
  }
  //::写法
  getShowingTodos = () => {
    switch(this.state.showingCategory){
      case 'all':
        return this.state.todos
      case 'active':
        return this.state.todos.filter(it => it.done === false)
      case 'completed':
      return this.state.todos.filter(it => it.done === true)
    }
  }

  clearCompleted = () => {
    this.setState({
      todos:this.state.todos.filter(it => it.done === false)
    })
  }

  itemCheck = (todo) =>{
    this.setState({
      todos:this.state.todos.filter(it => it !== todo)
    })
  }

  //全选按钮 选择全部
  selectAll = () => { 
    this.setState({
      todos:this.state.todos.map(todo => ({...todo,done:!this.isAllSelected()}))
    })
  }

  //全选按钮判断 是否全部选择
  isAllSelected = () => { 
    //console.log('isAllselected???',this.state)
    return this.state.todos.every(it => it.done === true)
  }
  render() {
    //console.log('render 函数')
    return (
      <div>
        <TodoStart 
          isAllSelected={this.isAllSelected} 
          selcetAll={this.isAllSelected}
          />

        <TodoList 
          todos={this.getShowingTodos()} 
          onchange={this.itemCheck}
          />

        
      </div>
    )
  }
}
// <TodoInfo
        //   onClearCompleted={this.clearCompleted()}
        // />



class TodoStart extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" 
          checked={this.props.isAllSelected()} 
          onChange={this.props.selectAll}
          />全选
        <input type="text" placeholder="请输入文字"/>
      </div>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
      {this.props.todos.map((todo,index) => (
        <TodoItem todo={todo} key={index} onchange={this.props.onchange(todo)}></TodoItem>)
        )}
      </ul>
    )
  }
}

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" onChange={this.props.onchange}/>
        <span>{this.props.todo.content}</span>
        <button>&times;</button>
      </li>
    )
  }
}

// class TodoInfo extends React.Component{ //要改上层组件的状态
//   render() {
//     return (
//       <div>
//         <span>item(s) left</span>
//         <span>
//           <input type="radio"/>全部
//           <input type="radio"/>未完成
//           <input type="radio"/>已完成
//         </span>
//         <button onClick={this.props.onClearCompleted}>清除</button>
//       </div>
//     )
//   }
    
// }

export default TodoApp;
