import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';

import React from 'react';
import useStyles from './assets/jss/styles';
import Sidebar from './components/Sidebar';
import './assets/scss/styles.scss';
import Main from './components/Main';
import { Route, Switch } from 'react-router';
import News from './components/News';
import Tournaments from './components/Tournaments';
import Clubs from './components/Clubs';
import CreateNew from './components/News/pages/CreateNew';
import Navbar from './components/Navbar';
import Login from './features/Auth/Login';
import Videos from './components/Videos';
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Navbar />
      </AppBar>

      <Sidebar />
      <main className={'main ' + classes.main}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/news/create" component={CreateNew} />
          <Route path="/login" exact component={Login} />
          <Route path="/news" component={News} />
          <Route path="/tournaments" component={Tournaments} />
          <Route path="/clubs" component={Clubs} />
          <Route path="/videos" component={Videos} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
