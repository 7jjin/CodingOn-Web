const { Todo } = require('../models');

const get_todo = (req, res) => {
  Todo.findAll().then((data) => {
    res.json({ data });
  });
  //   res.json({ data: db });
};
const post_todo = (req, res) => {
  Todo.create({
    title: req.body.title,
    done: req.body.done,
  }).then((data) => {
    res.json({ data });
  });
};
const patch_todo = async (req, res) => {
  const patchList = await Todo.update({ title: req.body.title }, { where: { id: req.body.id } });
  res.json(patchList);
};

const delete_todo = async (req, res) => {
  const deleteList = await Todo.destroy({ where: { id: req.body.id } });
  const searchAll = await Todo.findAll();
  res.json(searchAll);
};

module.exports = { get_todo, post_todo, patch_todo, delete_todo };
