module.exports = function(){

const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://todotest:todotest1@ds153841.mlab.com:53841/ztingtodolist');

// create schema
const
  Schema = mongoose.Schema,
  todoSchema = new Schema({
  item: String
  }),
  // create item model
  Todo = mongoose.model('Todo', todoSchema),
  // create initial todoitem
  todoItem = Todo({item: 'flowers'}).save(function(err){
    if (err) throw err;
    console.log('successfully save');
  });
return Todo;
};
