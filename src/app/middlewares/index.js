import { applyMiddleware } from 'redux';

const logger = store => next => action => {
  console.log(`ACTION: ${action.type}`);
  return next(action);
}

const middlewares = applyMiddleware(logger);

export default middlewares;