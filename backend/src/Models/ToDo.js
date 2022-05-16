const mongoose = require ('mongoose')

const ToDoSchema = mongoose.Schema ({
name: {
    type: String,
    required: true,
}
});

module.exports = mongoose.model ('restaurants', ToDoSchema);