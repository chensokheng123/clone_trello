import React from 'react';
import { Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));
export default function Card({ card }) {
  const classes = useStyle();

  return (
    <div>
      <Paper className={classes.card}>{card.content}</Paper>
    </div>
  );
}
