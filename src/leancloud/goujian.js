import AV from 'leancloud-storage'

export default function() {
    // 声明一个 Todo 类型
  var Todo = AV.Object.extend('TodoList');
  // 新建一个 Todo 对象
  var todo = new Todo();
  todo.set('data', new Date());
  todo.set('user_id', 1);
  todo.save().then(function (todo) {
    // 成功保存之后，执行其他逻辑.
    console.log('New object created with objectId: ' + todo.id);
  }, function (error) {
    // 异常处理
    console.error('Failed to create new object, with error message: ' + error.message);
  });
}
