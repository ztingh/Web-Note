module.exports = function(app){

const
  bodyParser = require('body-parser'),
  todoModel = require('./data/todo-model');

var Todo = todoModel();
// item data
var data = [{item: 'go swimming'}, {item: 'drink milk'}, {item: 'make bed'}];

// app get
app.get('/todo', function(req, res) {
  Todo.find({}, function(err, data) {
    if (err) throw err;
    res.render('todo', {todos: data});
  });
  // res.render('todo', {todos: data});
});

// add item
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.post('/todo', urlencodedParser, function(req, res) {
  Todo(req.body).save(function(err, data) {
    if (err) throw err;
    res.json(data);
  });
  // data.push(req.body);
  // res.json(data);
});
// delete item
app.delete('/todo/:itemText', function(req, res) {
  var todoItem  = Todo.find({item: req.params.itemText.replace(/\-/g, ' ')});
  todoItem.remove(function(err, data) {
    if (err) throw err;
    res.json(data);
  });
});
};
//   data = data.filter(function(todo) {
//     return todo.item.replace(/\s/g, '-') !== req.params.itemText;
//   });
//   res.json(data);
// });
