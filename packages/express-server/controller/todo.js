const Todo = require("../models/todo");

exports.create = (req, res) => {
  console.log("create");
  const { content } = req.body;

  const todo = new Todo({
    content,
    completed: false,
  });

  todo.save().then((todo) => {
    return res.send(todo);
  });
};

exports.findAll = (req, res) => {
  console.log("findAll", req.query);

  const { content } = req.query;
  Todo.find({ content: new RegExp(content) }).then((todos) => {
    console.log("@@@@", content, todos);
    return res.send(todos);
  });
};

exports.delete = (req, res) => {
  console.log("delete");
  const { id } = req.body;
  Todo.deleteOne({ _id: id }).then((todo) => {
    return res.send(todo);
  });
};
