import express from 'express';
import ClassesController from './controllers/classesController';
import ConnectiosController from './controllers/ConnectionsController';

const classesControler = new ClassesController();
const connectionsController = new ConnectiosController();

const Route = express.Router();

Route.get('/classes', classesControler.index);
Route.post('/classes', classesControler.create);

Route.get('/connections', connectionsController.index);
Route.post('/connections', connectionsController.create);
Route.delete('/connections', connectionsController.delete);


export default Route;