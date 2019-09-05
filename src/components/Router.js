import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import React from "react";
import App from './App';
import NotFound from './NotFound';

const Router = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
