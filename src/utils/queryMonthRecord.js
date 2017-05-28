export default function () {
    let query00 = new AV.Query('TodoList')
    query00.equalTo('user_id', 3)
    let query01 = new AV.Query('TodoList')
    query01.greaterThanOrEqualTo('createAt', new Date('2017-5-1 00:00:00'))

    let query02 = new AV.Query('TodoList')
    query02.greaterThanOrEqualTo('createAt', new Date('2017-6-1 00:00:00'))

    let query = AV.Query.and(query01, query02)

    query.ascending('createdAt')

    query.find().then(function (results) {
        console.dir(results)
    }).catch(function (error) {
        console.log(error)
    })
}

