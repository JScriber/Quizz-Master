import express from 'express';

// Router.
const questionRouter = express.Router();

/**
 * Router for questions list.
 * @param {*} req 
 * @param {*} res 
 */
questionRouter.get('/', (req, res) => res.send());

/**
 * Form for new question.
 * @param {*} req 
 * @param {*} res 
 */
questionRouter.get('/new', (req, res) => res.send());

/**
 * Create a new question.
 * @param {*} req 
 * @param {*} res 
 */
questionRouter.post('/new', (req, res) => res.send());

/**
 * Form for edit question.
 * @param {*} req 
 * @param {*} res 
 */
questionRouter.get('/edit/:id', (req, res) => res.send());

/**
 * Updates the question.
 * @param {*} req 
 * @param {*} res 
 */
questionRouter.post('/edit/:id', (req, res) => res.send());

/**
 * Deletes the given question.
 * @param {*} req 
 * @param {*} res 
 */
questionRouter.delete('/:id', (req, res) => res.send());

export default questionRouter;
