import express from 'express';

import UserController from './controller/user.controller;'
import DeckController from './controller/deck.controller';
import CardController from './controller/card.controller';

const routes = express.Router();

//init controllers
const userController = new UserController();
const deckController = new DeckController();
const cardController = new CardController();

//user routes
routes.get('/user', userController.index);
routes.get('/user/:id', userController.getById);
routes.post('/user', userController.create);
routes.put('/user/:id', userController.update);

//deck routes
routes.get('/deck/:id', deckController.index);
routes.post('/deck', deckController.save);
routes.put('/deck/:id', deckController.update);

//card routes
routes.get('/card/:deck_id', cardController.index);
routes.post('/card', cardController.create);
routes.put('/card/:id', cardController.update);

export default routes
