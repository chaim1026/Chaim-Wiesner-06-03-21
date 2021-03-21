import React, { lazy, Suspense } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
// import BoughtItems from './pages/bought-items/bought-items.component';
// import ShopItems from './pages/shop-items/shop-items.component';
// import BoughtItemsList from './pages/bought-items-list/bought-items-list.component';
// import DeliveredItemsList from './pages/delivered-items-list/delivered-items-list.component';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundry from './components/error-boundry/error-boundry.component';

const ShopItems = lazy(() => import('./pages/shop-items/shop-items.component'));
const BoughtItems = lazy(() => import('./pages/bought-items/bought-items.component'));
const DeliveredItemsList = lazy(() => import('./pages/delivered-items-list/delivered-items-list.component'))

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundry>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={ShopItems} />
            <Route exact path='/bought-items/:page?' component={BoughtItems} />
            <Route exact path='/delivered-items-list' component={DeliveredItemsList} />
          </Suspense>
        </ErrorBoundry>
        {/* <Redirect exact from='/bought-items' to='/bought-items/items' /> */}
      </Switch> 
    </div>
  );
}

export default App;
