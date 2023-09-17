// importing npm modules
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
// importing routers
import { router } from './routes/loginRoutes';

// importing controllers
import { AppRouter } from './AppRouter';

// importing for sideeffects
import './controllers/LoginController';
import './controllers/RootController';

// ---

const app = express();

// ---

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['string'] }));
app.use(router);
app.use(AppRouter.getInstance());

// ---

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
