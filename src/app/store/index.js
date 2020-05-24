import { createStore } from 'redux';

import reducers from '../rootReducer';
import midlewares from '../middlewares';

const store = createStore(reducers, midlewares);

export default store;