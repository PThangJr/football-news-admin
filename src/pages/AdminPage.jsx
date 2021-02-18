import React from 'react';
import { NavLink, Route, Switch, useLocation } from 'react-router-dom';
import Controls from '../components/body/Controls';
import News from '../components/body/news/News';
import Header from '../components/header/Header';
import ActionsPage from './CreateUpdatePage';
import NewsDetailPage from './NewsDetailPage';
import NewsPage from './NewsPage';

const AdminPage = () => {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <>
      <Header />
      <main className="body">
        <div className="container-fluid">
          <Switch>
            <Route path={`/admin/detail-page/:newId`} component={NewsDetailPage} />
            <Route path={`/admin/store/create`} component={ActionsPage} />
            <Route path={`/admin/store/update/:newId`} component={ActionsPage} />
            <Route path={`${location.pathname}/`} exact component={NewsPage} />
          </Switch>
        </div>
      </main>
    </>
  );
};

export default AdminPage;
