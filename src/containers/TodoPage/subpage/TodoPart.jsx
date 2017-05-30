/* module */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

/*style*/
import './todo.css'

/*ActionCreators*/
import * as userinfo_ActionCreator from '../../../actions/userinfo'
import * as dateinfo_ActionCreator from '../../../actions/dateinfo'

/* component */
import TodoTitle from '../../../components/TodoTitle'

class TodoPart extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div id="todo-part">
                <TodoTitle dateinfo={this.props.dateinfo} />
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        userinfo: state.userinfo,
        dateinfo: state.dateinfo
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {}
}

TodoPart = connect(mapStateToProps, mapDispatchToProps)(TodoPart)
export default TodoPart