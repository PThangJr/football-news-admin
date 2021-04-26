import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  scores: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconPlus: {
    fontSize: '30px',
    marginRight: theme.spacing(1),
    cursor: 'pointer',
  },
}));
