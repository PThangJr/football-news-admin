import Login from '../views/Login';

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Login',
    component: () => <Login />,
  },
];
