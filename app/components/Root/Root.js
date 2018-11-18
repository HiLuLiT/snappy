import './Root.scss';

import React from 'react';
import { hot } from 'react-hot-loader';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Form from '../Form/Form';

class Root extends React.Component {
  

  render() {
    return (
      <ErrorBoundary>
          <Form></Form>
      </ErrorBoundary>
    );
  }
}

export default hot(module)(Root);
