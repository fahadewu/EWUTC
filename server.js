import express from 'express';
import router from './routes/userRoutes.js';
import cors from 'cors';
const app = express();

app.use('/', router);

app.use(cors("*"));


app.listen();
