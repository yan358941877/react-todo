import React from 'react'
import './style.css'

import TodoItem from '../TodoItem'

class TodoList extends React.Component{
    render(){
        return(
            <div id="todo-list">
                {
                    this.props.data.map((item, index)=>{
                        return <TodoItem data={item} key={index} index={index}/>
                    })
                }
            </div>
        )
    }
}

export default TodoList