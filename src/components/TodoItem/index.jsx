import React from 'react'
import './style.css'


class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: this.props.data.content,
            finish: this.props.data.finish,
            delete: this.props.data.delete,
            important: this.props.data.important,
            time: this.props.data.time,
            index: this.props.index,
        }
    }

    handleContentChange(event) {
        const value = event.target.value
        this.setState({
            content: value
        })
    }
    handleTimeChange(event) {
        const value = event.target.value
        this.setState({
            time: value
        })
    }
    finishChange(event) {
        event.target.blur()

        // 向服务器发送修改后的数据，对数据库中的数据进行修改
    }
    handleEnterDown(event) {
        if (event.keyCode == 13) {
            this.finishChange(event)
        }
    }
    // 点击切换 “完成” “未完成”状态
    handleToggleFinish() {
        const isFinish = this.state.finish
        this.props.handleTodoFinish(this.state.index)
        this.setState({
            finish: !isFinish
        })
    }
    // 点击切换 “重要事项” “非重要事项” 状态
    handleToggleImportant() {
        const isImportant = this.state.important
        this.props.handleTodoSpecial(this.state.index)
        this.setState({
            important: !isImportant
        })
    }
    handleDeleteTodo() {
        const choose = window.confirm('确认要删除该条记录?')
        if (choose) {
            //调用父类方法更新数据库，并且将该 TodoItem 从TodoList中删除
            this.props.handleTodoDelete(this.state.index)
            this.setState({
                delete: true
            })
        }
    }
    render() {
        const index = this.state.index
        return (
            <div>
                {
                    this.state.delete
                        ? ''
                        : <div className={this.state.important ? 'todo-item important' : index % 2 == 0 ? 'even todo-item' : 'todo-item'} >
                            <i className={this.state.finish ? 'finish' : ''} onClick={this.handleToggleFinish.bind(this)} />
                            <input type="text"
                                value={this.state.content}
                                onChange={this.handleContentChange.bind(this)}
                                ref={(input) => this.input = input}
                                onKeyDown={this.handleEnterDown.bind(this)}
                                defaultValue="请输入待办事项"
                            />
                            <div className="todo-operate">
                                <input type="text"
                                    value={this.state.time}
                                    onChange={this.handleTimeChange.bind(this)}
                                    onKeyDown={this.handleEnterDown.bind(this)}
                                    defaultValue="请输入时间安排"
                                />
                                <i className={this.state.important ? 'iconfont icon-collection important' : 'iconfont icon-collection'} onClick={this.handleToggleImportant.bind(this)} />
                                <i className="iconfont icon-empty" onClick={this.handleDeleteTodo.bind(this)} />
                            </div>
                        </div>
                }
            </div>

        )
    }
}

export default TodoItem
//onBlur={this.finishChange.bind(this)}