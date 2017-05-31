import AV from 'leancloud-storage'


export default function (newData, userinfo, dateinfo, onSuccess) {
    let startDate = new Date()
    startDate.setFullYear(dateinfo.year)
    startDate.setMonth(dateinfo.month - 1)
    startDate.setDate(dateinfo.day)
    startDate.setHours(0)
    startDate.setMinutes(0)
    startDate.setSeconds(0)

    let endDate = new Date()
    endDate.setFullYear(dateinfo.year)
    endDate.setMonth(dateinfo.month - 1)
    endDate.setDate(dateinfo.day + 1)
    endDate.setHours(0)
    endDate.setMinutes(0)
    endDate.setSeconds(0)

    var startDateQuery = new AV.Query('TodoList')
    startDateQuery.greaterThanOrEqualTo('date', startDate)

    var endDateQuery = new AV.Query('TodoList')
    endDateQuery.lessThan('date', endDate)

    let useridQuery = new AV.Query('TodoList')
    useridQuery.equalTo('user_id', parseInt(userinfo.userID))

    var query = AV.Query.and(startDateQuery, endDateQuery, useridQuery)

    query.find().then(function (results) {

        if (results.length <= 0) {
            // console.log(results)

            // var todo = AV.Object.createWithoutData('TodoList','')
            // // 修改属性
            // todo.set('date', startDate)
            // todo.set('todolist', newData)
            // todo.set('user_id', userinfo.userID)
            // // 保存到云端
            // todo.save();
            var TodoList = AV.Object.extend('TodoList');
            // 新建对象
            var todo = new TodoList();
            // 设置名称
            todo.set('date', startDate)
            todo.set('todolist', newData)
            todo.set('user_id', parseInt(userinfo.userID))
            
            // 保存到云端
            todo.save();
        } else {

            const todoid = results[0].id
            var todo = AV.Object.createWithoutData('TodoList', todoid)
            todo.set('todolist', newData)
            todo.save()
        }

        onSuccess(newData)
    }).catch(function (error) {
        console.log(error)
    })
}



