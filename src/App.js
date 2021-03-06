import React from 'react';
import NavBar from './components/navbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './components/products';
import ProductDetails from './components/productDetails';
import Posts from './components/posts';
import PostDetails from './components/postDetails';
import Dashboard from './components/admin/dashboard';
import Home from './components/home';
import Queries from './components/queries';
import NotFound from './components/notFound';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <hr />
        <div className="fw-light">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Products} />
            <Route path="/posts/:year/:month" component={PostDetails} />
            <Route path="/posts" component={Posts} />
            <Route path="/queries" component={Queries} />
            <Route path="/admin" component={Dashboard} />
            <Route exact path="/" component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
            <Redirect from="/messages" to="/posts" />
          </Switch>
        </div>
        <small className="fixed-bottom text-secondary m-3">Version 0.0.8</small>
      </React.Fragment>
    );
  }
}

export default App;
