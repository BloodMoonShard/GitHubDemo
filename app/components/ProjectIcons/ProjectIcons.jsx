import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { SvgIcon } from 'components/UI';
import styles from './styleJS';

class ProjectIcons extends PureComponent {
  render() {
    const icon = require(`./${this.props.name}`);
    if (!icon) return null;
    return (
      <SvgIcon>
        {icon.default}
      </SvgIcon>
    );
  }
}

ProjectIcons.propTypes = {
  name: PropTypes.oneOf([
    'Arrow',
    'Card',
    'Check',
    'Counter',
    'Csv',
    'Download',
    'Excel',
    'Info',
    'Minus',
    'Queues',
    'Some',
    'Table',
    'Upload',
    'Userpic',
    'Setting',
    'SmartCounter',
    'IcoCD',
  ])
};

export default withStyles(styles)(ProjectIcons);
