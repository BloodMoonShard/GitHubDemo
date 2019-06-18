import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { withStyles, Grid, Button } from 'components/UI';
import TextField from 'components/UI/Fields/TextField';
import * as Validation from 'utils/validation';
import styles from './styleJS';

class Login extends PureComponent {
  render() {
    const { classes, onSubmit, handleSubmit } = this.props;
    return (
      <React.Fragment>
        <form
          className={classes.wrapperForm}
        >
          <br />
          <Grid
            container
            spacing={8}
            alignItems="flex-end"
          >
            <Grid
              item
              md
              sm
              xs
              spacing={8}
            >
              <Field
                component={TextField}
                name="token"
                label="Token"
                type="text"
                validate={[Validation.required]}
              />
            </Grid>
          </Grid>
          <Grid
            spacing={8}
            container
            justify="center"
          >
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                onClick={handleSubmit(onSubmit)}
                color="primary"
                style={{ textTransform: 'none' }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'Login',
})(
  withStyles(styles)(Login),
);
