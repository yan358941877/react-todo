import React from 'react'
import './calendar.css'

import YearMonthPicker from '../../../components/YearMonthPicker'
import Calendar from '../../../components/Calendar'
class CalendarPart extends React.Component{
    constructor(props){
        super(props)
        this.date = new Date()
        const year = this.date.getFullYear()
        const month = this.date.getMonth()+1
        const day = this.date.getDate()
        const week = this.date.getDay()
        this.state = {
            year,month,day,week
        }
    }
    previousMonth(){
        let nowMonth = this.date.getMonth()
        this.date.setMonth(nowMonth-1)
        const year = this.date.getFullYear()
        const month = this.date.getMonth()+1
        const day = this.date.getDate()
        const week = this.date.getDay()
        this.setState({
            year, month,day,week
        })
    }
    nextMonth(){
        let nowMonth = this.date.getMonth()
        this.date.setMonth(nowMonth+1)
        const year = this.date.getFullYear()
        const month = this.date.getMonth()+1
        const day = this.date.getDate()
        const week = this.date.getDay()
        this.setState({
            year, month,day,week
        })
    }
    render(){
        return (
            <div id="calendar-part">
                <div className="layer01 layer"></div>
                <div className="layer02 layer"></div>
                <div className="layer03 layer">
                    <YearMonthPicker 
                        year={this.state.year} 
                        month={this.state.month} 
                        previousMonth={this.previousMonth.bind(this)}
                        nextMonth={this.nextMonth.bind(this)}/>
                    <Calendar />
                </div>
                
            </div>
        )
    }
}

export default CalendarPart 