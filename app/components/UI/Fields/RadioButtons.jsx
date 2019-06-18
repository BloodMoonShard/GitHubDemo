import React, { PureComponent } from 'react';
import { RadioGroup, Radio, FormControlLabel, FormLabel } from '@material-ui/core';

class TextField extends PureComponent {
  render() {
    const {
      input,
      label,
      meta: { touched, error },
      labelControl: {
        first,
        second,
      },
      ...custom
    } = this.props;
    if (input.type && input.type === 'hidden') {
      return <input {...input} />;
    }
    return (
      <React.Fragment>
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup
          {...input}
          {...custom}
          value={input.value === 'false' || input.value === false || input.value.length === 0 ? false : true}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <FormControlLabel
            value={false}
            control={<Radio />}
            label={first ? first : 'Нет'}
          />
          <FormControlLabel
            value={true}
            control={<Radio />}
            label={second ? second : 'Да'}
          />
        </RadioGroup>
      </React.Fragment>
    );
  }
}

TextField.defaultProps = {
  labelControl: {},
};

export default TextField;
