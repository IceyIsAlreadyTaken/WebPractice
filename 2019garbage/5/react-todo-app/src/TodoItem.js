import React from 'react';
import Proptypes from 'prop-types';




const TodoItem = (props, context) => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.done}
      onChange={() => context.doneChange(props.todo)} />
    <span>{props.todo.content}</span>
    <button onClick={() => context.delTodo(props.todo)}>&times;</button>
  </li>
)

TodoItem.contextTypes = {
  doneChange: Proptypes.func,
  delTodo: Proptypes.func
}


export default TodoItem;
