import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

export { sequelize };

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
