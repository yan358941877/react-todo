import React from 'react'
import './style.css'

class YearMonthPicker extends React.PureComponent {
    render() {
        return (
            <div id="yearmonth-picker">
                <span className="left-triangle"></span>
                <span className="month-year">December 2017</span>
                <span className="right-triangle"></span>
            </div>
        )
    }
}

export default YearMonthPicker