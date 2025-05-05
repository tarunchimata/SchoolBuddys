
const express = require('express');
const app = express();
const authRoutes = require('./src/routes/auth');

app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
