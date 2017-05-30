import AV from 'leancloud-storage'

export default function (year, month,day,week, userid,onSuccess) {
    // 设定月初时间
    let bom = new Date()
    bom.setFullYear(year)
    bom.setMonth(month-1)
    bom.setDate(1)
    bom.setHours(0)
    bom.setMinutes(0)
    bom.setSeconds(0)

    // 设定月末时间
    let eom = new Date()
    eom.setFullYear(year)
    eom.setMonth(month)
    eom.setDate(1)
    eom.setHours(0)
    eom.setMinutes(0)
    eom.setSeconds(0)
    parseInt
    // 用户id  
    var userQuery = new AV.Query('TodoList')
    userQuery.equalTo('user_id', parseInt(userid))
    // 起始时间
    var startDateQuery = new AV.Query('TodoList');
    startDateQuery.greaterThanOrEqualTo('date', bom);
    // 终止时间
    var endDateQuery = new AV.Query('TodoList');
    endDateQuery.lessThan('date', eom);
    // 联合查询
    var query = AV.Query.and(userQuery,startDateQuery, endDateQuery);
    // 按照date的升序排序
    query.ascending('date')
    query.find().then(function (results) {
        // console.dir(results[0].createdAt.getMonth())
        let records = new Array(32)
        results.map((item, index)=>{
            let date = item.attributes.date.getDate()
            records[date] = 1
        })
        //console.log(records)
        
        onSuccess(year, month,day,week, records)
    }).catch(function (error) {
        console.log(error)
    })
}

