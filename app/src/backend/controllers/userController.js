import { User } from '../models/user.js';

export const registerUser = async (req, res) => {
  const { fullName, section, school, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'Full name, email, and password are required.' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    // Create the new user
    const user = await User.create({ fullName, section, school, email, password });

    res.status(201).json({ message: 'User registered successfully.', userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};
