import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import useStyles from './styles';
import './styles.scss';

const CustomLink = ({ activeWhenOnlyExact, to, label, className, awesomeIcon }) => {
  let match = useRouteMatch({ path: to, exact: activeWhenOnlyExact });
  return (
    <ListItem button selected={match ? true : false}>
      <NavLink to={to} className="MuiListItem-root">
        <ListItemIcon className={className} children={awesomeIcon} />
        <ListItemText>{label}</ListItemText>
      </NavLink>
    </ListItem>
  );
};
const Sidebar = () => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
          <Typography variant="h6" component="h5" align="center">
            ADMIN DASHBOARD
          </Typography>
        </div>
        <Divider />
        <List>
          <CustomLink
            label="Home"
            activeWhenOnlyExact={'true'}
            to="/"
            className={classes.iconItem}
            awesomeIcon={<i className="fas fa-home"></i>}
          />
          <CustomLink
            label="News"
            to="/news"
            className={classes.iconItem}
            awesomeIcon={<i className="fas fa-newspaper"></i>}
          />
          <CustomLink
            label="Tournaments"
            to="/tournaments"
            className={classes.iconItem}
            awesomeIcon={<i className="fas fa-store"></i>}
          />
          <CustomLink
            label="Clubs"
            to="/clubs"
            className={classes.iconItem}
            awesomeIcon={<i className="fas fa-tshirt"></i>}
          />
          <CustomLink
            label="Videos"
            to="/videos"
            className={classes.iconItem}
            awesomeIcon={<i className="fas fa-video"></i>}
          />
          <CustomLink
            label="Results"
            to="/results"
            className={classes.iconItem}
            awesomeIcon={<i className="fas fa-clipboard"></i>}
          />
        </List>
        <Divider />
        <List></List>
      </Drawer>
    </>
  );
};

export default Sidebar;
