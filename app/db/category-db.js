import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileAsync';

const adapter = new FileSync('database/category.json');

export const database = low(adapter).then(d => {
  d.defaults({
    categories: [
      {
        id: 0,
        name: 'PHP'
      },
      {
        id: 1,
        name: 'JS' 
      },
      {
        id: 2,
        name: 'Webmarketing'
      }
    ]
  }).write();

  return d;
}).catch(() => console.log('Error with category database.'));

/** Finds in database all the questions. */
export const findAllCategories = () => database.then(d => d.get('categories').value());
