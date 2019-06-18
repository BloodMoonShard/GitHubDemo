import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


class SelectField extends PureComponent {
  render() {
    const {
      input,
      label,
      meta: { touched, error },
      children,
      ...custom
    } = this.props;
    return (
      <FormControl className={custom.className}>
        <InputLabel>{label}</InputLabel>
        <Select
          floatingLabelText={label}
          errorText={touched && error}
          {...input}
          onChange={input.onChange}
          children={children}
          {...custom}
        />
      </FormControl>
    );
  }
}

export default SelectField;
