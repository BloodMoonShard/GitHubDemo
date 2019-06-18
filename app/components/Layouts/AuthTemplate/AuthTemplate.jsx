import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from 'components/UI';

import style from './styleJS';

class AuthTemplate extends PureComponent {
  render() {
    const { classes, children } = this.props;
    if (localStorage.getItem('token')) {
      window.location.href = '/';
      return null;
    }
    return (
      <Grid
        container
        className={classes.root}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {children}
        </Grid>
      </Grid>

    );
  }
}

AuthTemplate.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
};

export default withStyles(style)(AuthTemplate);
