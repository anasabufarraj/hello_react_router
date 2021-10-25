import React from 'react';
import NavBar from './components/navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Products from './components/products';
import Posts from './components/posts';
import Dashboard from './components/admin/dashboard';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <hr />
        <div className="fw-light">
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
