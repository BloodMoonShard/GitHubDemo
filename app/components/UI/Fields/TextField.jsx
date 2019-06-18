import React, { PureComponent } from 'react';
import { TextField as T } from '@material-ui/core';
import moment from 'moment';

class TextField extends PureComponent {
  render() {
    let value = this.props.input.value;
    const {
      input,
      formatDate,
      meta: { touched, error },
      ...custom
    } = this.props;
    if (formatDate && custom.type === 'date') {
      value = moment(input.value).format(formatDate);
    }
    if (input.type && input.type === 'hidden') {
      return <input {...input} />;
    }
    return (
      <T
        helperText={touched && error}
        error={touched && !!error}
        {...{
          ...input,
          value
        }}
        {...custom}
        fullWidth
      />
    );
  }
}

export default TextField;
