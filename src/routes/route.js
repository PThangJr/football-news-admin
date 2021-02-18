import AdminPage from '../pages/AdminPage';
import HomePage from '../pages/HomePage';

const routes = [
  {
    path: '/admin',
    exact: false,
    main: () => <AdminPage />,
  },
  {
    path: '/',
    exact: true,
    main: () => <HomePage />,
  },
];
export default routes;
