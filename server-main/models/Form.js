
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  formName: String,
  formDescription: String,
  segments: [{ type: mongoose.Schema.Types.Mixed }],
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
