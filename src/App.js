import React from 'react';
import {Route, Switch} from 'react-router-dom'


import Navbar from './components/navbar/Navbar.component';
import Home from './components/home/Home.component';
import Admin from './components/admin/Admin.component';
import Form from './components/add-form/Form.component';
import Details from './components/details/Details.component';
import Cart from './components/cart/Cart.component';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/admin' render={(props) => <Admin {...props} />} />
        <Route path='/cart' render={() => <Cart />} />
        <Route path='/products/:id' render={(props) => <Details {...props}/>} />
        <Route path='/admin/form' render={(props) => <Form {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
