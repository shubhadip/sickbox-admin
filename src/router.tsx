import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { browserHistory } from './history';

import App from './components/app/App';
import Signin from './components/signIn/SignIn';
import Signup from './components/signUp/SignUp';
import NotFound from './components/notFound/NotFound';
import Product from './components/product/Product';
import Order from './components/order/Order';
// import Admin from './components/admin/Admin';
import Header from './components/header/Header';
import AuthComponent from './HOC/AuthComponent';
import AsyncComponent from './HOC/AsyncComponent';
import { Admin } from './HOC/ImportComponents';

const history = browserHistory;

const Routes = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/products" component={Product} />
          <Route path="/orders" component={Order} />
          <Route path="/admin" component={AuthComponent(Admin)} />
          <Route exact={true} path="/" component={AuthComponent(App)} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
