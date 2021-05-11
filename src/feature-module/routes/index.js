import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

const AsyncHomeComponent = Loadable({
  loader: () => import('../components/home'),
  loading() {
    return <div>Loading...</div>
  }
});

const AsyncAboutComponent = Loadable({
  loader: () => import('../components/about'),
  loading() {
    return <div>Loading...</div>
  }
});
 
const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" component={AsyncHomeComponent}></Route>
      <Route exact path="/home" component={AsyncHomeComponent}></Route>
      <Route exact path="/about" component={AsyncAboutComponent}></Route>
      <Route path="*">
        <div>Page not found</div>
      </Route>
    </Switch>
  )
}

export default Routes;
