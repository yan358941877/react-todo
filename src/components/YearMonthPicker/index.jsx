import React from 'react'
import './style.css'

class YearMonthPicker extends React.PureComponent {
    constructor(props){
        super(props)
        this.MonthStr = ['January','February','March','April','May','June','July','August','September','October','November','December']
    }
    clickPrevious(){
        if(this.props.previousMonth){
            this.props.previousMonth()
        }
    }
    clickNext(){
        if(this.props.nextMonth){
            this.props.nextMonth()
        }
    }
    render() {
        const year = this.props.year
        const month = this.props.month
        return (
            <div id="yearmonth-picker">
                <span className="left-triangle" onClick={this.clickPrevious.bind(this)}></span>
                <span className="month-year">{this.MonthStr[month-1] + ' ' + year}</span>
                <span className="right-triangle" onClick={this.clickNext.bind(this)}></span>
            </div>
        )
    }
}

export default YearMonthPicker