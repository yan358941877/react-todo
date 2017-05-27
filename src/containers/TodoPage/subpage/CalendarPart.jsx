import React from 'react'
import './calendar.css'

import YearMonthPicker from '../../../components/YearMonthPicker'
import Calendar from '../../../components/Calendar'
class CalendarPart extends React.Component{
    render(){
        return (
            <div id="calendar-part">
                <div className="layer01 layer"></div>
                <div className="layer02 layer"></div>
                <div className="layer03 layer">
                    <YearMonthPicker />
                    <Calendar />
                </div>
                
            </div>
        )
    }
}

export default CalendarPart 