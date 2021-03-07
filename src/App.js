import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import BoughtItems from './pages/bought-items/bought-items.component';
import ShopItems from './pages/shop-items/shop-items.component';
import Header from './components/header/header.component';
// import BoughtItemsList from './pages/bought-items-list/bought-items-list.component';
import DeliveredItemsList from './pages/delivered-items-list/delivered-items-list.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ShopItems} />
        <Redirect exact from='/bought-items' to='/bought-items/items' />
        <Route exact path='/bought-items/:page?' component={BoughtItems} />
        {/* <Route exact path='/bought-items/items' component={BoughtItemsList} /> */}
        {/* <Route path='/bought-items/stores' component={Stores} /> */}
        <Route exact path='/delivered-items-list' component={DeliveredItemsList} />
      </Switch> 
    </div>
  );
}

export default App;
