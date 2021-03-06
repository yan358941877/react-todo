import React from 'react'
import './style.css'

import firstDayOfMonth from '../../utils/firstDayOfMonth'
import daysOfMonth from '../../utils/daysOfMonth'
import CalendarItem from '../CalendarItem'

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            last_dateArray: [],
            dateArray: [],
            next_dateArray: []
        }
    }
    componentWillMount() {
        const date = this.props.date
        const year = date.year
        const month = date.month
        const day = date.day
        const week = date.week
        this.calculateDateArray(year, month, day, week)
    }
    componentWillReceiveProps(nextProps) {
        const year = nextProps.date.year
        const month = nextProps.date.month
        const day = nextProps.date.day
        const week = nextProps.date.week
        this.calculateDateArray(year, month, day, week)
    }
    calculateDateArray(year, month, day, week) {
        // 计算本月第一天是周几
        // const year = this.props.year
        // const month = this.props.month
        // const day = this.props.day
        // const week = this.props.week

        // 本月第一天是周几
        let firstDay = firstDayOfMonth(day, week)

        // 上个月有多少天
        let lastMonthDays = daysOfMonth(year, month - 1)

        // 这个月有多少天
        let thisMonthDays = daysOfMonth(year, month)

        // 存放本次渲染所需显示的天数
        let dateArray = []
        let last_dateArray = []
        let next_dateArray = []

        for (let i = lastMonthDays - (firstDay - 1) + 1; i <= lastMonthDays; i++) {
            last_dateArray.push(i)
        }
        for (let i = 1; i <= thisMonthDays; i++) {
            dateArray.push(i)
        }

        let totalDateLength = last_dateArray.length + dateArray.length

        if (totalDateLength % 7 !== 0) {
            let nextMonthDays = 7 - totalDateLength % 7
            for (let i = 1; i <= nextMonthDays; i++) {
                next_dateArray.push(i)
            }
        }
        this.setState({
            last_dateArray, dateArray, next_dateArray
        })
    }
    
    // 判断当前月份是否和redux中存放的dateinfo一致，如果不一致，则不显示 “选中” 的特殊样式，
    isSameWithCheckedDate(){
        // 页面上显示的Date
        const showPageDate = this.props.date
        // redux中存放的checkedDate
        const checkedDate = this.props.checkedDate
        if(showPageDate.year === checkedDate.year && showPageDate.month === checkedDate.month){
            return true
        }else {
            return false
        }
    }
    render() {
        const records = this.props.records
        
        return (
            <div id="calendar">
                <ul id="calendar-title" className="clear-fix">
                    
                    <li>MON</li>
                    <li>TUE</li>
                    <li>WED</li>
                    <li>THU</li>
                    <li>FRI</li>
                    <li>SAT</li>
                    <li>SUN</li>
                </ul>
                <ul id="calendar-day" className="clear-fix">
                    {
                        this.state.last_dateArray.map((item, index) => {
                            return <CalendarItem key={index} item={item} classname='lastmonth'/>
                        })
                    }
                    {
                        this.state.dateArray.map((item, index) => {
                            return <CalendarItem 
                                key={index} 
                                item={item} 
                                date={this.props.date}
                                classname='thismonth'
                                changeDate={this.props.changeDate}
                                hasRecord={records[index+1]}
                                isCheckedDate={this.isSameWithCheckedDate()}
                                />
                        })
                    }
                    {
                        this.state.next_dateArray.map((item, index) => {
                            return <CalendarItem key={index} item={item}  classname='nextmonth'/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Calendar


// {
//     this.state.last_dateArray.map((item, index) => {
//         return <li key={index}>{item}</li>
//     })
// }
// {
//     this.state.dateArray.map((item, index) => {
//         return <li key={index}>{item}</li>
//     })
// }
// {
//     this.state.next_dateArray.map((item, index) => {
//         return <li key={index}>{item}</li>
//     })
// }