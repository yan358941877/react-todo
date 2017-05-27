import React from 'react'
import './style.css'

class CalendarItem extends React.PureComponent{
    render(){
        const date = new Date()
        let classname = this.props.classname
    
        return (
            <div className="calendar-item">
                <div 
                    className={this.props.item==date.getDate()?'today '+classname: classname}>

                    {this.props.item}
                </div>
            </div>
        )
    }
}

export default CalendarItem