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
import TodoList from '../../../components/TodoList'

/* leanCloud */
import queryOneDayRecord from '../../../leancloud/queryOneDayRecord'

class TodoPart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
        this.mapQueryResultToState = this.mapQueryResultToState.bind(this)
    }
    componentWillMount(){

        const dateinfo = this.props.dateinfo
        const userinfo = this.props.userinfo
        queryOneDayRecord(userinfo, dateinfo,this.mapQueryResultToState)
    }
    mapQueryResultToState(data){
        this.setState({
            data
        })
    }
    render(){
        //console.log(this.state.data)
        return (
            <div id="todo-part">
                <TodoTitle dateinfo={this.props.dateinfo} />
                {
                    this.state.data.length > 0
                    ? <TodoList data={this.state.data}/>
                    : ''
                }
                
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