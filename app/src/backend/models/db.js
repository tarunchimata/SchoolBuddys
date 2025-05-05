import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
// Initialize Sequelize with PostgreSQL connection

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

export { sequelize };

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
// Sync the database (create tables if they don't exist)
(async () => {
  try {
    await sequelize.sync({ force: false }); // Set to true to drop and recreate tables
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
})();
// Note: The above sync function should be called only once during the initial setup or when you want to reset the database.
// In production, you might want to use migrations instead of syncing directly.
// You can use a library like Sequelize CLI or Umzug for migrations.
// For now, this is just a simple example to ensure the database connection and syncing works.

await sequelize.sync({ force: false, logging: (msg) => console.log(`[Sequelize] ${msg}`) });
console.log('Database synced successfully.');
// Note: The above sync function should be called only once during the initial setup or when you want to reset the database.
