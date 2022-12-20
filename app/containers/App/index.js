import React from 'react';
import { PropTypes } from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';
import NotFound from '../Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Application from './Application';
import LandingCorporate from './Landing';
import ThemeWrapper from './ThemeWrapper';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App(props) {
  const { history } = props;
  console.log('history', history);
  return (
    <ThemeWrapper>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LandingCorporate} />
          <Route path="/app" component={Application} />
          <Route component={Auth} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeWrapper>
  );
}

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
