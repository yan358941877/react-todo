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
    changeDate(date){
        this.date.setDate(date)

        const year = this.date.getFullYear()
        const month = this.date.getMonth()+1
        const day = this.date.getDate()
        const week = this.date.getDay()
        
        this.setState({
            year, month,day,week
        })
    }
    render(){
        
        const year = this.state.year
        const month = this.state.month
        const day = this.state.day
        const week = this.state.week
        
        return (
            <div id="calendar-part">
                <div className="layer01 layer"></div>
                <div className="layer02 layer"></div>
                <div className="layer03 layer">
                    <YearMonthPicker 
                        year={year} 
                        month={month} 
                        previousMonth={this.previousMonth.bind(this)}
                        nextMonth={this.nextMonth.bind(this)}/>
                    <Calendar 
                        date={{year,month,day,week}}
                        changeDate={this.changeDate.bind(this)}
                        />
                </div>
                
            </div>
        )
    }
}

export default CalendarPart 