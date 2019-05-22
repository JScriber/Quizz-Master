import express from 'express';

// Router.
const menuRouter = express.Router();

/**
 * Router for menu page.
 * @param {*} req 
 * @param {*} res 
 */
menuRouter.get('/', (req, res) => res.render('menu.pug'));

export default menuRouter;
