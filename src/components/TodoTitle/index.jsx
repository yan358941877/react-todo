import React from 'react'
import './style.css'

const weekname = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const monthname = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class TodoTitle extends React.Component {
    
    render(){
        // console.log(this.props.dateinfo)
        const dateinfo = this.props.dateinfo
        return (
            <div id='todo-title' className="clear-fix">
                <span className="weekname">{weekname[dateinfo.week%7]}</span>
                <span className="dateinfo">
                    {
                        dateinfo.day + 'th ' + monthname[dateinfo.month-1] + ' ' + dateinfo.year
                    }
                </span>
            </div>
        )
    }
}

export default TodoTitle