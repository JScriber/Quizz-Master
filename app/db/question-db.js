import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileAsync';
import { findAllCategories } from './category-db';

import { copy } from '../utils';

const adapter = new FileSync('database/question.json');

/** Database connection. */
export const database = low(adapter).then(d => {
  d.defaults({
    id: 1,
    questions: [
      {
        id: 0,
        title: 'De quel côté agit le PHP ?',
        hint: 'Ce n’est pas côté client !',
        goodAnswer: 'Côté serveur',
        badAnswer1: 'Côté client',
        badAnswer2: 'Côté jardin',
        badAnswer3: 'PHP quoi ?',
        category: 0,
        difficulty: 1,
      },
      {
        id: 1,
        title: 'Le monde des affaires est-il instable ?',
        hint: 'Peut-être',
        goodAnswer: 'Yes',
        badAnswer1: 'Absolument',
        badAnswer2: 'Moyen',
        badAnswer3: 'Légèrement',
        category: 2,
        difficulty: 3
      }
    ]
  }).write();
  return d;
}).catch(() => console.log('Error with database.'));

/**
 * Finds in database all the questions.
 */
export const findAll = async () => {
  const questions = copy(await database.then(d => d.get('questions').value()));
  const categories = await findAllCategories();

  // Map the category to the question.
  return questions.map(q => {
    q.category = categories.find(c => c.id === q.category);

    return q;
  });
}

/** Find one question. */
export const findOne = async (id) => {
  const questions = await findAll();

  return questions.find(q => q.id === Number.parseInt(id));
};

/**
 * Persists the question in the database.
 * @param {*} body 
 */
export const post = async (body) => {

  const db = await database;

  const nextId = await db.get('id').value() + 1;

  await db.update('id', n => n + 1).write();

  const data = {
    ... body,
    id: nextId,
    category: Number.parseInt(body.category),
    difficulty: Number.parseInt(body.difficulty),
  };

  return db.get('questions').push(data).write();
}

/**
 * Updates the question in the database.
 * @param {*} body 
 */
export const put = async (body) => {

  const db = await database;

  const questions = (await db.get('questions').value()).map(q => {

    if (q.id === body.id) {
      q = {
        ... body,
        category: Number.parseInt(body.category),
        difficulty: Number.parseInt(body.difficulty),
      };
    }

    return q;
  });

  return db.set('questions', questions).write();
}


/**
 * Removes an element from the JSON database.
 * @param {*} id - ID of the item.
 */
export const remove = async (id) => {
  const adapter = await database;
  let data = adapter.get('questions').value();
  data = data.filter(e => e.id !== +id);

  return adapter.set('questions', data).write();
}
