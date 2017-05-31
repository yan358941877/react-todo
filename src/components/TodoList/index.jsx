import React from 'react'
import './style.css'

import TodoItem from '../TodoItem'

class TodoList extends React.Component{
    render(){
        const dateinfo = this.props.dateinfo
        return(
            <div id="todo-list">
                {
                    this.props.data.map((item, index)=>{
                        const timekey = dateinfo.year + dateinfo.month + dateinfo.day + index
                        return <TodoItem data={item} 
                            key={Number(timekey)} 
                            index={index}
                            handleTodoFinish={this.props.handleTodoFinish}
                            handleTodoSpecial={this.props.handleTodoSpecial}
                            handleTodoDelete={this.props.handleTodoDelete}
                            handleTodoUpdate={this.props.handleTodoUpdate}/>
                    })
                }
            </div>
        )
    }
}

export default TodoList

// 删除方法  特别关注方法  完成方法  添加方法