import React from 'react';
import TodoItem from './TodoItem.js'


const TodoList = (props) => (
  <ul>
    {
      props.todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={todo.content + index} />
      ))
    }
  </ul>
)

export default TodoList;
