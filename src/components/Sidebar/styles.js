import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  drawerPaper: {
    width: drawerWidth,
  },
  iconItem: {
    fontSize: '22px',
  },
}));
export default useStyles;
