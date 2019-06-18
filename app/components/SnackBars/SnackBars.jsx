import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import SnackBarsWrapper from './SnackBarsWrapper';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class SnackBars extends React.Component {
  state = {
    open: this.props.open,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState({
        open: nextProps.open,
      });
    }
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { variant, message } = this.props;
    const { open } = this.state;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={this.handleClose}
        autoHideDuration={5000}
      >
        <SnackBarsWrapper
          variant={variant}
          message={message}
        />
      </Snackbar>
    );
  }
}

SnackBars.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  message: PropTypes.node,
  onClose: PropTypes.func
};

export default withStyles(styles)(SnackBars);
