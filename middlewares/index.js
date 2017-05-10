import HTTPStatus from 'http-status';

const isDevelopment = (env) => env === 'development';

export default {
  foward400: (req, res, next) => {
    const err = new Error('Not Found');
    err.status = HTTPStatus.NOT_FOUND;
    next(err);
  },
  errorHandler: (env) => (req, res, next) => {
    res.status(err.status || HTTPStatus.INTERNAL_SERVER_ERROR);
    res.json({
      message: err.message,
      error: isDevelopment(env) ? err : {}
    });
  }
}
