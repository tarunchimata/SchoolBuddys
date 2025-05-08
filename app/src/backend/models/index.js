import { sequelize } from './db.js';
import { User } from './user.js';

await sequelize.sync();
console.log('Database synced.');

export { sequelize, User };
