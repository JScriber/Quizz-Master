import express from 'express';

// Router.
const gameRouter = express.Router();

/**
 * Start game page provider.
 * @param {*} req 
 * @param {*} res 
 */
gameRouter.get('/start', async (req, res) => res.send());

/**
 * Start game response from from.
 * @param {*} req 
 * @param {*} res 
 */
gameRouter.post('/start', async (req, res) => res.send());

/**
 * Play game provider.
 * @param {*} req 
 * @param {*} res 
 */
gameRouter.get('/play', async (req, res) => res.send());

/**
 * Play game response from from.
 * @param {*} req 
 * @param {*} res 
 */
gameRouter.post('/play', async (req, res) => res.send());

export default gameRouter;
