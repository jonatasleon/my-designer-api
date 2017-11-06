import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

import routes from './routes';
import middlewares from './middlewares';

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes());

// catch 404 and forward to error handler
app.use(middlewares.foward400);

// error handler
app.use(middlewares.errorHandler(app.get('env')));

export default app;
