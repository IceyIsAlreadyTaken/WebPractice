import React from 'react';



class TodoItem extends React.Component {
  render() {
    //console.log(this.props,'todoitem')
    return (
      <li>
        <input 
          type="checkbox" 
          checked={this.props.todo.done}
          onChange={() => this.props.doneChange(this.props.todo)}/>
        <span>{this.props.todo.content}</span>
        <button onClick={() => this.props.delTodo(this.props.todo)}>&times;</button>
      </li>
    )
  }
}

export default TodoItem;
