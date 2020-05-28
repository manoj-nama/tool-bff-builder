import React from 'react';
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from './utils/history';

import {
  ElementsCreatePage,
  ElementsListPage,
} from './elements';

import {
  Header,
} from './components';

const MainApp = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={ElementsListPage} />
        <Route path="/elements/create" component={ElementsCreatePage} />
        <Route path="/elements" component={ElementsListPage} />

        {/* No Match */}
        <Route render={() => <Redirect to='/elements' />} />
      </Switch>
    </Router>
  );
};

export default MainApp;