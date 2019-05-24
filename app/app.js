import express from 'express';
import bodyParser from 'body-parser';

// Routes imports.
import gameRouter from './routes/game.route';
import menuRouter from './routes/menu.route';
import questionRouter from './routes/question.route';

import path from 'path';

const PORT = 8080;

// Server creation.
const server = express();

// Support for JSON bodies.
server.use(express.json());

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


// Serves static files in /public directory.
server.use(express.static(__dirname + 'public'));

// Tell to user pug as template engine.
server.set('view engine', 'pug');
server.set("views", path.join(__dirname, "views"));

// Routes.
server.use('/menu', menuRouter);
server.use('/game', gameRouter);
server.use('/question', questionRouter);

// Start the server.
const listener = server.listen(PORT, () => console.log('Server initialized on http://localhost:' + PORT));

export default server;

// Mandatory for test purposes (the server cannot be closed in tests without it).
export const close = () => listener.close();
