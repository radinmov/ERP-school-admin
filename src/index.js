import React, { Fragment } from 'react';
import Router from './router';
import ReactDOM from 'react-dom/client';
import "./globalStyle.css"
import { Header } from './layout/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <Header />
    <Router />
  </Fragment>
);

