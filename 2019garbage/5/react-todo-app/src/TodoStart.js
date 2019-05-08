import React from 'react';




class TodoStart extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <input type="checkbox" 
          checked={this.props.isAllSelected} 
          onChange={this.props.allSelected}
          />全选
        <input type="text" 
          placeholder="请输入文字"
          onKeyUp={(e) => this.props.addTodo(e)}/>
      </div>
    )
  }
}


export default TodoStart;
