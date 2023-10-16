const router = require("express").Router();
const todoController = require("../controller/todo.js");

// post todo
router.post("/todo", todoController.create);

// get todo
router.get("/todos", todoController.findAll);

// delete todo
router.delete("/todo", todoController.delete);

// // Retrieve all documents
// router.get("/api/tutorial", todoController.findAll);

// // Retrieve single document by id
// router.get("/api/tutorial/:id", todoController.findOne);

// // Update document by id
// router.put("/api/tutorial/:id", todoController.update);

// // Delete document by id
// router.delete("/api/tutorial/:id", todoController.delete);

module.exports = router;
