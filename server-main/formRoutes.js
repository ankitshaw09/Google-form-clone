const express = require('express');
const router = express.Router();
const Form = require('./models/Form');

router.post('/api/submit-form', async (req, res) => {
  try {
    const { formName, formDescription, segments } = req.body;

    // Create a new form document
    const newForm = new Form({
      formName,
      formDescription,
      segments,
    });

    // Save the form data to MongoDB
    await newForm.save();

    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Error saving form data' });
  }
});

module.exports = router;
