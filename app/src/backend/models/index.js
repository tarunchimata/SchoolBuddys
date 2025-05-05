import { sequelize } from './db.js';
import User from './user.js';

await sequelize.sync(); // or sync({ force: true }) if needed
console.log('Database synced.');

export { sequelize, User };
