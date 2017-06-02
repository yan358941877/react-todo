## Days Todo(web版Todo应用)

这段时间一直在学习React相关内容，最近我用react相关技术实现了一个最经典的React项目--Todo应用。我尽我最大的努力实现了我想到的功能，尽管还有些小瑕疵。这是我的Github项目地址: [https://github.com/yan358941877/react-todo](https://github.com/yan358941877/react-todo)  
欢迎`issue`,`star` or `follow`!我会继续开源更多有趣的项目

## 地址

[点击进入](https://yan358941877.github.io/react-todo/build/)

## 部分效果截图

### 登录注册
![image](https://raw.githubusercontent.com/yan358941877/react-todo/master/screenshot/login-signup.gif)

### 日历+todo功能

![image](https://raw.githubusercontent.com/yan358941877/react-todo/master/screenshot/todo.gif)


## 工具&技能

* `react`
* `redux`
* `react-redux`
* `react-router`
* `LeanCloud`:提供后端云服务

## 使用

```
git clone https://github.com/yan358941877/react-todo.git

cd react-todo

# 安装依赖
npm install 

# 开发环境
npm run start

# 打包
npm run build

```

## 实现功能

- [x] 登录、注册
- [x] 日历显示
- [x] 日期切换
- [x] 显示选中月份中有哪些天有todo记录
- [x] todo列表显示选中日期的todo记录
- [x] 新增todo
- [x] 修改todo
- [x] 删除todo
- [x] 特别关注的todo
- [x] 应用退出

## 目录结构

```
├─actions   
├─components  
│  ├─Calendar
│  ├─CalendarItem
│  ├─LoginForm
│  ├─SignTitle
│  ├─SignUpForm
│  ├─TodoItem
│  ├─TodoList
│  ├─TodoTitle
│  └─YearMonthPicker
├─constants 
├─containers 
│  ├─Login
│  ├─SignUp
│  └─TodoPage
│      └─subpage
├─leancloud 
├─reducers   
├─router
├─static 
│  └─font
├─store
└─utils
```

## 支持

Github项目地址: [https://github.com/yan358941877/react-todo](https://github.com/yan358941877/react-todo)  
欢迎`issue`,`star` or `follow`!我会继续开源更多有趣的项目