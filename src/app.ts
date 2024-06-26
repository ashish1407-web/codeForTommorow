import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from  '../src/route/route';
import errorHandler from '../src/middleware/errorHandler';
import sequelize from './config/config';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use(errorHandler);

sequelize.sync();

export default app;
