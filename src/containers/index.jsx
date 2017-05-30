/*module*/
import React from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* actionCreator */
import * as userinfo_actionCreator from '../actions/userinfo'
import * as dateinfo_actionCreator from '../actions/dateinfo'
/*style*/
import './style.css'
/*LeanCloud*/
import initLeanCloud from '../leancloud/initLeanCloud'

class App extends React.Component {

    // 当最外层组件加载完毕之前，在localStorage中查找是否有用户名，如果有进入todo应用，否则进入登录页面
    componentWillMount() {
        initLeanCloud()

        /* 初始化dateinfo */
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()+1
        const day = date.getDate()
        const week = date.getDay()
        this.props.dateinfo_operator.updateCheckedDate({year, month, day,week})
        
        const username = localStorage.getItem('username')
        const userID = localStorage.getItem('userID')
        if (!username || !userID) {
            hashHistory.push('/login')
        } else {
            //console.log(this.props)
            // 将username和userID存放到store中
            this.props.userinfo_operator.updateUser({ username, userID })
            hashHistory.push('/todo')
        }
    }
    render() {
        return (
            <div id='app'>
                <div id='container'>
                    {
                        this.props.children
                    }
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        userinfo_operator: bindActionCreators(userinfo_actionCreator, dispatch),
        dateinfo_operator: bindActionCreators(dateinfo_actionCreator, dispatch)
    }
}
App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App