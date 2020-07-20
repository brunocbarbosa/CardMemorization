import express from 'express';

import DeckController from './controller/deck.controller';

const routes = express.Router();

//init controllers
const deckController = new DeckController();

//deck routes
routes.get('/deck', deckController.index);
routes.post('/deck', deckController.save);
routes.put('/deck/:id', deckController.update);

export default routes
