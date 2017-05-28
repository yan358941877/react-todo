import React from 'react'
import './calendar.css'

import YearMonthPicker from '../../../components/YearMonthPicker'
import Calendar from '../../../components/Calendar'

import queryMonthRecord from '../../../leancloud/queryMonthRecord'

class CalendarPart extends React.Component {
    constructor(props) {
        super(props)
        this.date = new Date()
        const year = this.date.getFullYear()
        const month = this.date.getMonth() + 1
        const day = this.date.getDate()
        const week = this.date.getDay()
        this.state = {
            year, month, day, week,
            records: []
        }
        this.handleChangeMonthResult = this.handleChangeMonthResult.bind(this)
    }
    componentWillMount(){
        
        const year = this.date.getFullYear()
        const month = this.date.getMonth()+1
        const day = this.date.getDate()
        const week = this.date.getDay()

        // 向服务器查询，用户在本月的哪些天都有记录，用于在Calendar上显示
        queryMonthRecord(year, month, day, week, this.handleChangeMonthResult)
    }
   
    previousMonth() {
        let nowMonth = this.date.getMonth()
        this.date.setMonth(nowMonth - 1)
        const year = this.date.getFullYear()
        const month = this.date.getMonth() + 1
        const day = this.date.getDate()
        const week = this.date.getDay()

        // 向服务器查询，用户在本月的哪些天都有记录，用于在Calendar上显示
        queryMonthRecord(year, month, day, week, this.handleChangeMonthResult)

    }

    nextMonth() {
        let nowMonth = this.date.getMonth()
        this.date.setMonth(nowMonth + 1)
        const year = this.date.getFullYear()
        const month = this.date.getMonth() + 1
        const day = this.date.getDate()
        const week = this.date.getDay()

        // 向服务器查询，用户在本月的哪些天都有记录，用于在Calendar上显示
        queryMonthRecord(year, month, day, week,this.handleChangeMonthResult)

    }

    handleChangeMonthResult(year, month, day, week, records) {
        
        this.setState({
            year, month, day, week, records
        })
    }

    changeDate(date) {
        this.date.setDate(date)

        const year = this.date.getFullYear()
        const month = this.date.getMonth() + 1
        const day = this.date.getDate()
        const week = this.date.getDay()

        // 对redux中的state进行操作

        // 更新自己的state
        this.setState({
            year, month, day, week
        })
    }
    render() {
        
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
                        nextMonth={this.nextMonth.bind(this)} />
                    <Calendar
                        date={{ year, month, day, week }}
                        changeDate={this.changeDate.bind(this)}
                        records = {this.state.records}
                    />
                </div>

            </div>
        )
    }
}

// 这个组件负责修改 checkedDate
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default CalendarPart 