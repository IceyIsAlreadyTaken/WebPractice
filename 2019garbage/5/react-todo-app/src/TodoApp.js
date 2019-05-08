import React from 'react';
import TodoStart from './TodoStart.js'
import TodoList from './TodoList.js'
import TodoInfo from './TodoInfo.js'
//import logo from './logo.svg';
//import './App.css';

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
    //console.log('??????????')
    this.setState({
      todos:this.state.todos.map(it => {
        if (it == todo) {
          console.log(it.done)
          return {
            ...todo,
            done:!it.done
          }
        } else {
          return it
        }
      })
    })
  }

  //全选按钮 选择全部
  allSelected = () => { 
    console.log('?????')
    if (this.isAllSelected()) {
      this.setState({
        todos:this.state.todos.map(todo => 
          ({
            ...todo,
            done:false
          })
        )
      })
    } else {
      this.setState({
        todos:this.state.todos.map(todo => 
          ({
            ...todo,
            done:true
          })
        )
      })
    }
  }

  //全选按钮判断 是否全部选择
  isAllSelected = () => { 
    //console.log('isAllselected???',this.state
    return this.state.todos.every(it => it.done === true)
  }

  //删除条目
  delTodo = (todo) => {
    this.setState({
      todos:this.state.todos.filter(it => it !== todo)
    })
  }

  //增加条目
  addTodo = (e) => {
    if (e.keyCode == 13) {
      let todoText = e.target.value.trim()
      if (todoText) {
        this.setState({
          todos:[...this.state.todos,{
            done:false,
            content:todoText
          }]
        })
        e.target.value =''
      }
    }
  }

  //剩余未完成计数
  activeCount = () => {
    return this.state.todos.filter(it => it.done == false).length
  }

  //设置展示种类
  setShowingCategory = (category) => {
    this.setState({
      showingCategory:category
    })
  }

  //清除
  clearCompleted = () => {
    this.setState({
      todos:this.state.todos.filter(it => !it.done)
    })
  }

  render() {
    //render 的时候不能调用 setState
    //console.log(this.selectAll)
    return (
      <div>
        <TodoStart 
          isAllSelected={this.isAllSelected()} 
          allSelected={this.allSelected}
          addTodo={this.addTodo}
          />

        <TodoList 
          todos={this.getShowingTodos()} 
          itemCheck={this.itemCheck}
          delTodo={this.delTodo}
          />

        <TodoInfo
          activeCount={this.activeCount}
          showingCategory={this.state.showingCategory}
          setShowingCategory={this.setShowingCategory}
          onClearCompleted={this.clearCompleted}/>
      </div>
    )
  }
}


export default TodoApp;
