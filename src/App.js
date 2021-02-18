import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes/route';
import './scss/main.scss';
const App = () => {
  return (
    <div className="wrapper">
      <Switch>
        {routes.map((route, index) => {
          const { path, exact, main } = route;
          return <Route key={index} path={path} exact={exact} component={main} />;
        })}
      </Switch>
    </div>
  );
};

export default App;
