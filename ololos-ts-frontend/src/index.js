/*eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import routes from "./routes";
import {loadPosts} from './actions/postActions';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/toastr/build/toastr.min.css";
import "../node_modules/simplemde/dist/simplemde.min.css";
import "./styles/styles.css";
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();
store.dispatch(loadPosts());


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
