import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
  },
});

function Welcome() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>Welcome!</div>
    </div>
  );
}

export default Welcome;
