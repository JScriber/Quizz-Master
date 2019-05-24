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
        title: 'Est-ce que vous aimez le PHP ?',
        category: 1,
        difficulty: 1
      },
      {
        id: 1,
        title: 'Le monde des affaires est-il instable ?',
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

  return questions.find(q => q.id === id);
};
