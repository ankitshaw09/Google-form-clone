const express = require('express');
const router = express.Router();
const User = require('./models/User'); // Import the User model

// Route to create a new user
router.post('/signup', async (req, res) => {
  try {
    const { email, password, confirmPassword, name } = req.body;

    // Simple validation: Check if required fields are provided
    if (!email || !password || !confirmPassword || !name) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if the password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Check if the email is already registered (you can implement this logic)
    const isEmailTaken = await User.exists({ email });
    if (isEmailTaken) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Create a new user object (you can add more fields as needed)
    const newUser = new User({
      email,
      password, // You should hash and salt the password before saving it
      name,
    });

    // Save the new user to the database
    await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
});

// Route to fetch all users
router.get('/', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

module.exports = router;
