import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
const Main = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" component="h2" align="center">
        Welcome to Admin Dashboard
      </Typography>
    </>
  );
};

export default Main;
