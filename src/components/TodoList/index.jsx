import React from 'react'
import './style.css'

import TodoItem from '../TodoItem'

class TodoList extends React.Component{
    render(){
        return(
            <div id="todo-list">
                {
                    this.props.data.map((item, index)=>{
                        return <TodoItem data={item} 
                            key={index} 
                            index={index}
                            handleTodoFinish={this.props.handleTodoFinish}/>
                    })
                }
            </div>
        )
    }
}

export default TodoList

// 删除方法  特别关注方法  完成方法  添加方法