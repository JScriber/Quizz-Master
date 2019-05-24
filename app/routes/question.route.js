import express from 'express';

// Managers import.
import { QuestionManager } from '../services/question-manager';
import { CategoryManager } from '../services/category-manager';

// Router.
const questionRouter = express.Router();

/**
 * Router for questions list.
 * @param {*} req 
 * @param {*} res 
 */
questionRouter.get('/', async (req, res) => {
  const manager = QuestionManager.getInstance();
  const questions = await manager.get();

  res.render('question-list.pug', { data: questions });
});

/**
 * Form for new question.
 * @param {*} req 
 * @param {*} res 
 */
questionRouter.get('/new', async (req, res) => {

  const categoryManager = CategoryManager.getInstance();

  // Fetch the data.
  const categories = await categoryManager.get();
  const difficulties = [1, 2, 3];

  res.render('question-form.pug', {
    editMode: false,
    categories, difficulties
  });
});

/**
 * Create a new question.
 * @param {*} req 
 * @param {*} res 
 */
questionRouter.post('/new', ({ body }, res) => {

  const questionManager = QuestionManager.getInstance();
  questionManager.save(body);

  res.redirect('/question');
});

/**
 * Form for edit question.
 * @param {*} req 
 * @param {*} res 
 */
questionRouter.get('/edit/:id', async (req, res) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isInteger(id)) {
    const questionManager = QuestionManager.getInstance();
    const categoryManager = CategoryManager.getInstance();

    // Fetch the data.
    const question = await questionManager.get(id);
    const categories = await categoryManager.get();
    const difficulties = [1, 2, 3];

    res.render('question-form.pug', {
      editMode: true,
      data: question,
      categories, difficulties
    });
  } else {
    res.send();
  }
});

/**
 * Updates the question.
 * @param {*} req
 * @param {*} res
 */
questionRouter.post('/edit/:id', async (req, res) => {
  const id = Number.parseInt(req.params.id);
  const body = req.body;

  if (Number.isInteger(id)) {
    const questionManager = QuestionManager.getInstance();
    body.id = id;

    const response = await questionManager.save(body);

    if (response.success === true) {
      res.redirect('/question');
    } else {
      // TODO: Resend page.
    }
  }
});

/**
 * Deletes the given question.
 * @param {*} req
 * @param {*} res
 */
questionRouter.post('/delete/:id', async (req, res) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isInteger(id)) {
    const questionManager = QuestionManager.getInstance();
    await questionManager.deleteOne(id);

    res.redirect('/question');
  }
});

export default questionRouter;
