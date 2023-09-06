const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Form = require('./models/Form');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = 'your_secret_key'; 


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://ananditrashi786:6YxN0PwXvMCKaMUi@cluster0.vsy6zcc.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

// Import your routes
const userRoutes = require('./userRoutes');
const formRoutes = require('./formRoutes');

// Use your routes
app.use('/api/users', userRoutes);
app.use('/api/forms', formRoutes);

// Serve your React frontend (assuming it's in the 'client/build' folder)
app.use(express.static('gf/build'));

app.post('/api/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate a JWT token upon successful login
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});


// Handle form submission
app.post('/api/submit-form', async (req, res) => {
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

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

