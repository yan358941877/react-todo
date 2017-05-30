/* module */
import React from 'react'

/* containers */
import CalendarPart from './subpage/CalendarPart'
import TodoPart from './subpage/TodoPart'
/* style */
import './style.css'

class TodoPage extends React.Component{
    render(){
        return(
            <div id="todo-page">
                <div id="todo-container" className="clear-fix">
                    <div id="todo-left" className="float-left">
                        <CalendarPart />
                    </div>
                    <div id="todo-right" className="float-left">
                        <TodoPart />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default TodoPage