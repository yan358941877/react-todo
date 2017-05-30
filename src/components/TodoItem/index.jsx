import React from 'react'
import './style.css'


class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            content: this.props.data.content,
            finish: this.props.data.finish,
            important: this.props.data.important,
            time: this.props.data.time,
            index: this.props.index,
        }
    }

    handleContentChange(event){
        const value = event.target.value
        this.setState({
            content: value
        })
    }
    handleTimeChange(event){
        const value = event.target.value
        this.setState({
            time: value
        })
    }
    finishChange(event){
        event.target.blur()

        // 向服务器发送修改后的数据，对数据库中的数据进行修改
    }
    handleEnterDown(event){
        if(event.keyCode==13){
            this.finishChange(event)
        }
    }
    render(){
        const index = this.state.index
        return(
            <div className={ this.state.important? 'todo-item important' : index%2==0?'even todo-item': 'todo-item'} >
                <i className={this.state.finish?'finish':''}/>
                <input type="text" 
                    value={this.state.content}
                    onChange={this.handleContentChange.bind(this)}
                    ref={(input)=>this.input = input}
                    onKeyDown={this.handleEnterDown.bind(this)}
                    />
                <div className="todo-operate">
                    <input type="text" 
                        value={this.state.time}
                        onChange={this.handleTimeChange.bind(this)}
                        />
                    <i className={this.state.important ? 'iconfont icon-collection important':'iconfont icon-collection'}/>
                    <i className="iconfont icon-empty"/>
                </div>
            </div>
        )
    }
}

export default TodoItem
//onBlur={this.finishChange.bind(this)}