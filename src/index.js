import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import indexRoutes from './routes/index.js';

const port = 3000;
const host = 'localhost';
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))

app.listen(port);
console.log(`Server is running on: http://${host}:${port}`);
