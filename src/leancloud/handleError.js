import AV from 'leancloud-storage'

function handleError(error){
    const stateCode = error.code
    let info = ''
    switch(stateCode){
        case 211:
            info = '当前用户不存在，请重新输入'
            alert(info)
            break
        case 125:
            info = '电子邮箱无效，请重新输入'
            alert(info)
            break
        case 202:
            info = '用户名已被占用，请更换用户名'
            alert(info)
            break
        case 203:
            info = '电子邮箱地址已经被占用，请更换邮箱或选择直接登录'
            alert(info)
            break
        default:
            console.log('error'+stateCode)
            break
    }
    
}

export default handleError