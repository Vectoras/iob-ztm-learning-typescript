// importing npm modules
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
// importing routers
import { router } from './routes/loginRoutes';

// ---

const app = express();

// ---

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['string'] }));
app.use(router);

// ---

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
