import * as React from 'react';
const {IndexRoute, Route} = require('react-router');

import app from '../containers/app';
import Button from '../component/SimpleComponent';


export default (
  <Route path="/" component={ app }>
    <IndexRoute component={Button}/>
  </Route>
);
