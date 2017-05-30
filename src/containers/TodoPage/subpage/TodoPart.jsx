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
import updateTodo from '../../../leancloud/updateTodo'

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
    // 这一方法只有在父组件更新时，才会调用，即由connect方法生成的新组件更新时，当前方法才会被调用
    componentWillReceiveProps(nextProps){
        //console.log(nextProps)
        const dateinfo = nextProps.dateinfo
        const userinfo = nextProps.userinfo
        queryOneDayRecord(userinfo, dateinfo,this.mapQueryResultToState)
    }
    mapQueryResultToState(data){
        this.setState({
            data
        })
    }

    // todo完成方法
    handleTodoFinish(index){
        
        let data = JSON.parse(JSON.stringify(this.state.data))
        data[index].finish = !data[index].finish
        // 更新数据库中的todo
        const dateinfo = this.props.dateinfo
        const userinfo = this.props.userinfo
        updateTodo(data, userinfo, dateinfo, this.mapQueryResultToState)
        
    }

    // todo 特别提示 方法
    handleTodoSpecial(index){
        let data = JSON.parse(JSON.stringify(this.state.data))
        data[index].important = !data[index].important
        // 更新数据库中的todo
        const dateinfo = this.props.dateinfo
        const userinfo = this.props.userinfo
        updateTodo(data, userinfo, dateinfo, this.mapQueryResultToState)
    }
    
    // 删除 todo 的方法
    handleTodoDelete(index){
        let data = JSON.parse(JSON.stringify(this.state.data))
        data[index].delete = !data[index].delete
        // 更新数据库中的todo
        const dateinfo = this.props.dateinfo
        const userinfo = this.props.userinfo
        updateTodo(data, userinfo, dateinfo, this.mapQueryResultToState)
    }
    render(){
        //console.log(this.state.data)
        return (
            <div id="todo-part">
                <TodoTitle dateinfo={this.props.dateinfo} />
                {
                    this.state.data.length > 0
                    ? <TodoList data={this.state.data} 
                        handleTodoFinish={this.handleTodoFinish.bind(this)}
                        handleTodoSpecial={this.handleTodoSpecial.bind(this)}
                        handleTodoDelete={this.handleTodoDelete.bind(this)}/>
                    : <TodoList data={[]}/>
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