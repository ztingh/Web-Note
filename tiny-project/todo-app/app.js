const
  express = require('express'),
  path = require('path'),
  app = express(),
  todoController = require('./controller/todoController');

// set view engine
app.set('view engine', 'ejs');

// use middleware
app.use('/views', express.static(path.join(__dirname, 'views')));

// fire controller
todoController(app);

// server listening
app.listen(3000, '127.0.0.1');
console.log('Server now listening to Port: 3000 IP: 127.0.0.1');
