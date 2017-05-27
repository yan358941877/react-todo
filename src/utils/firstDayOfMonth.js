// 计算本月的第一天是周几
export default function(day, week){
    let firstDay = week-(day-1)%7
    return firstDay < 0 ? 7+firstDay:firstDay
}