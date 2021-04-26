import { AppBar, CssBaseline } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import useStyles from './assets/jss/styles';
import './assets/scss/styles.scss';
import Clubs from './components/Clubs';
import CreateClub from './components/Clubs/pages/CreateClub';
import Main from './components/Main';
import Navbar from './components/Navbar';
import News from './components/News';
import CreateNew from './components/News/pages/CreateNew';
import Results from './components/Results';
import CreateResult from './components/Results/pages/CreateResult';
import Sidebar from './components/Sidebar';
import Tournaments from './components/Tournaments';
import Videos from './components/Videos';
import CreateVideo from './components/Videos/pages/CreateVideo';
import Login from './features/Auth/Login';

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
          <Route path="/clubs/create" component={CreateClub} />
          <Route path="/clubs" component={Clubs} />
          <Route path="/videos/create" component={CreateVideo} />
          <Route path="/videos" component={Videos} />
          <Route path="/results/create" component={CreateResult} />
          <Route path="/results" component={Results} />
          <Route path="/videos" component={Videos} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
