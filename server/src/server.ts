import express from 'express';
import cors from 'cors';
import Route from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(Route)

app.listen(3333);