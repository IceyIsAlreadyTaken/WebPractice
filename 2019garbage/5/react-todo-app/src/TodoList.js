import React from 'react';
import TodoItem from './TodoItem.js'






class TodoList extends React.Component {
  render() {
    return (
      <ul>
      {
        this.props.todos.map((todo,index) => (
          <TodoItem 
            todo={todo} 
            key={todo.content + index}
            doneChange={this.props.itemCheck}
            delTodo={this.props.delTodo} />
        ))
      }
      </ul>
    )
  }
}

export default TodoList;
