import React from 'react';





class TodoInfo extends React.Component{ //要改上层组件的状态
  render() {
    return (
      <div>
        <span>剩余 {this.props.activeCount()}</span>
        <span>
          <label>
            <input type="radio" 
              checked={this.props.showingCategory == 'all'} 
              onChange={() => this.props.setShowingCategory('all')}
              />全部
          </label>
          <label>
            <input type="radio" 
            checked={this.props.showingCategory == 'active'}
            onChange={() => this.props.setShowingCategory('active')}
            />未完成
          </label>
          <label>
            <input type="radio" 
            checked={this.props.showingCategory == 'completed'}
            onChange={() => this.props.setShowingCategory('completed')}
            />已完成
          </label>
        </span>
        <button onClick={() => this.props.onClearCompleted()}>清除</button>
      </div>
    )
  }  
}

export default TodoInfo;
