import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PortfolioDashboard from '../components/PortfolioDashboard';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Project from '../components/Project';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={PortfolioDashboard} exact={true} />
        <Route path='/portfolio' component={Portfolio} exact={true} />
        <Route path='/portfolio/:id' component={Project} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
