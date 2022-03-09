import React from 'react';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import BasicLayout from '../../srm-components/BasicLayout';
import { Grid } from '@mui/material';
import { PagesTransitionButton } from '../../components/PagesTransitionButton';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    minHeight: '100vh',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

export default function TradingPage() {
  const styles = useStyles();

  return (
    <BasicLayout>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={styles.root}
      >
        <PagesTransitionButton location={'trade'} />
      </Grid>
    </BasicLayout>
  );
}
