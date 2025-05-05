import bcrypt from 'bcrypt';
import { User } from '../models/index.js';

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, phone, password, schoolName, classYear, section } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName, email, phone, passwordHash: hash, schoolName, classYear, section
    });

    res.status(201).json({ message: 'User registered', user });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUsers = async (_req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Get Users Error:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

