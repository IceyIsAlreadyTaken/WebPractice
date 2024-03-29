import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component { //基类 有extends就要就有super()
  constructor() {   //props
    //setState 一般是异步执行，如果在回调函数中执行，一般是当场立即执行完毕
    //在回调中是不会批量进行的，运行完页面就更新
    super()
    this.state = {
      editingIndex:-1,
      category:'all',
      todos:[{
        content:'eat',
        active:true,
      },{
        content:'drink',
        active:false,
      },{
        content:'code',
        active:true,
      },{
        content:'熟悉react',
        active:false
      }]
    }
  }

  //删除条目
  deleteTodo = (todo) => {
    this.setState({
      todos:this.state.todos.filter(it => it !== todo)
    })
  }

  //增加条目
  addTodo = (e) => {
    var content = e.target.value.trim()
    if (e.keyCode == 13 && content) {
      this.setState({
        todos:[
          ...this.state.todos,
          {
            content,
            active:false,
          }
        ]
      })
      e.target.value = ''
    }
  }

  //绑定条目的状态
  toggleTodoStatus = (todo) => {
    // 
    // todo.active = !todo.active
    // this.forceUpdate()

    this.setState({
      todos:this.state.todos.map(it => {
        if (it == todo) {
          return {
            content:it.content,
            active:!it.active,
          }
        } else {
          return it 
        }
      })
    })
  }

  //判断是否全部完成
  isAllCompleted = () => {
    return this.state.todos.every(it => it.active)
  }

  //全选按钮
  toggleAll = () => {
    if (this.isAllCompleted()) {
      this.setState({
        todos:this.state.todos.map(it => {
          return {
            content:it.content,
            active:false,
          }
        })
      })
    } else {
      this.setState({
        todos:this.state.todos.map(it => {
          return {
            content:it.content,
            active:true,
          }
        })
      })
    }
  }

  // 剩余条目
  itemLeft = () => {
    return this.state.todos.filter(it => !it.active).length
  }

  //判断是否全部完成
  hasCompleted = () => {
    return this.state.todos.filter(it => it.active).length
  }

  //清除已完成条目
  clearCompleted = () => {
    this.setState({
      todos:this.state.todos.filter(it => !it.active)
    })
  }

  //双击后修改修改条目
  // 如果修改值为空时应该删除该条目
  setTodoContent = (e,todo) => {
    var content = e.target.value.trim()
    this.setState({
      todos:this.state.todos.map(it => {
        if (it == todo) {
          return {
            ...todo,
            content,
          } 
        } else {
            return it
        }
      })
    })
    if (e.target.value)
    console.log(e.target)
    // this.refs.edit.focus()
  }

  //双击条目
  setEditingIdx = (i) => {
    this.setState({
      editingIndex:i
    })   
    setTimeout(() => { 
      this.refs.edit.focus() 
    });
  }

  //修改条目失去焦点后删除该条目
  afterBlur = (todo) => {
    this.setState({
      editingIndex:-1
    })
    // console.log(todo.content)
    // console.log(!todo.content)
    if (!todo.content) {
      this.setState({
        todos:this.state.todos.filter(it => it.content != '')
      })
    }
  }

  //修改条目回车确认
  afterReturn = (e) => {
    console.log(e)
    console.log(e.keyCode)
    if (e.keyCode == 13) {
      this.refs.edit.blur()
    }
  }

  //设置分类
  setCategory = (cate) => {
    this.setState({
      category:cate
    })
  }

  //分类展示列表
  showingTodos = () => {
    if (this.state.category == 'all') {
      return this.state.todos
    } else if (this.state.category == 'active') {
      return this.state.todos.filter(it => it.active == false)
    } else {
      return this.state.todos.filter(it => it.active == true)
    }
  }

  render() { 
    return (
      <div id="todo-app">
        <div>
          {/* 需要判断是否全选 isAllcompleted*/}
          <input type="checkbox" checked={this.isAllCompleted()} onChange={() => this.toggleAll()}/> 
          <input type="text" onKeyUp={this.addTodo}/>
        </div>
        <ul>
          {
            this.showingTodos().map((todo,idx) => (
              <li key={idx}> 
                {/*  
                  坑点注意key值，条目出发双击事件后，如果key值不同，则不会进行对比，原来dom节点将会被删除，所以光标会从原来dom跳到新dam上边
                */}
                <span>{idx + 1 + '.'}</span>
                <input type="checkbox" checked={todo.active} onChange={() => this.toggleTodoStatus(todo)}/>
                {
                  this.state.editingIndex != idx ?
                  <span onDoubleClick={() => this.setEditingIdx(idx)}> {todo.content} </span>
                  :
                  <input type="text" value={todo.content} 
                    ref="edit"
                    onChange={(e) => this.setTodoContent(e,todo)}
                    onKeyUp={(e) => this.afterReturn(e)}
                    onBlur={(e) => this.afterBlur(todo)}
                  />
                }
                <button onClick={(e) => this.deleteTodo(todo)}>&times;</button> 
              </li>
            ))
          }
        </ul>
        <div>
          <span>{this.itemLeft()} item(s) left</span>   
          <label>
            <input type="radio"
            checked = {this.state.category == 'all'}
            onChange = {() => this.setCategory('all')}
            />All
          </label>
          <label>
            <input type="radio"
            checked = {this.state.category == 'active'}
            onChange = {() => this.setCategory('active')}
            />Active
          </label>
          <label>
            <input type="radio"
            checked = {this.state.category == 'completed'}
            onChange = {() => this.setCategory('completed')}
            />Completed
          </label>

          {/*this.hasCompleted() ||
            <button onClick={this.clearCompleted}>Clear Completed</button>
          */}
          {/*
            (() => {
              if()
              return 
            })()
          */}
          {
            this.hasCompleted() ? 
            <button onClick={this.clearCompleted}>Clear Completed</button>
           : 
          null 
          } 
          
        </div> 
      </div>
    )
  }
}

//⭐️
// class TodoItem extends React.Component {
//   constructor(props) {
//     supre(props)
//     this.props === props 
//   }
// }

//在大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染。我们通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题。



export default TodoApp;
