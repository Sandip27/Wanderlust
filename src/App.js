import react from 'react';
import Navbar from './components/Navbar';
import { Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

const App = () => {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/sign-up' component={SignUp} />
          <Redirect to='/'/>
        </Switch>
      </>
    );
};

export default App;
