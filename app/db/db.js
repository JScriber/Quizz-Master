import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileAsync';

const adapter = new FileSync('database/db.json');

export const database = low(adapter).then(d => {
  d.defaults({}).write();
  return d;
}).catch(() => console.log('Error with database.'));
