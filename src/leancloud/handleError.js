import AV from 'leancloud-storage'

function handleError(error){
    const stateCode = error.code
    let info = ''
    switch(stateCode){
        case 211:
            info = '当前用户不存在，请重新输入'
            break
        default:
            info = '未知错误'
            break
    }
    alert(info)
}

export default handleError