import React from 'react'
import './style.css'

class CalendarItem extends React.Component{
    constructor(props){
        super(props)
    }
    handleChangeDate(){
        const newDate = this.props.item
        if(this.props.changeDate){
            this.props.changeDate(newDate)
        }
    }
    render(){
        let classname = this.props.classname
        if(this.props.date && this.props.date.day == this.props.item){
            classname += ' today'
        }
        
        return (
            <div className="calendar-item">
                <div 
                    className={classname}
                    onClick={this.handleChangeDate.bind(this)}>

                    {this.props.item}
                    {
                        this.props.hasRecord
                        ? <div className='record' />
                        : ''
                    }
                </div>
            </div>
        )
    }
}

export default CalendarItem