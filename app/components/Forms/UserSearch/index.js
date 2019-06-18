import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles, Grid, Button } from 'components/UI';
import TextField from 'components/UI/Fields/TextField';
import * as Validation from 'utils/validation';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  searchBlock: {
    maxWidth: '300px',
  }
});

class UserSearch extends React.PureComponent {

  render() {
    const { handleSubmit, classes, onSubmit } = this.props;
    return (
      <form className={classes.root}>
        <Grid
          container
          justify="flex-start"
        >
          <Grid
            container
            className={classes.searchBlock}
            spacing={8}
            alignItems="center"
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
                name="userSearch"
                label="Users ..."
                type="text"
                validate={[Validation.required]}
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                onClick={handleSubmit(onSubmit)}
                color="primary"
                style={{ textTransform: 'none' }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default reduxForm({
  form: 'UserSearch',
})(withStyles(styles)(UserSearch));
