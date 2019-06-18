import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import _each from 'lodash/each';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import ButtonIcon from '@material-ui/core/IconButton';
import IconRemove from '@material-ui/icons/Close';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  btnIcon: {
    padding: '4px',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});

class MultiSelect extends PureComponent {

  state = {
    open: false,
  };

  constructor(props) {
    super(props);
  }

  onChange = (cls, item) => {
    const { fields, fieldValue, fieldLabel } = this.props;
    const { props } = item;
    const existValues = fields.getAll() || [];
    let exist = false;
    _each(existValues, (i, index) => {
      if (props[fieldValue] === i[fieldValue]) {
        exist = index;
      }
    });
    if (exist !== false) {
      fields.remove(exist);
    } else {
      fields.push({
        label: props[fieldLabel],
        value: props[fieldValue]
      });
    }
  };

  onClose = () => {
    this.setState({
      open: false,
    });
  };

  onOpen = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const {
      fields,
      width,
      label,
      meta: { touched, error },
      children,
      classes,
      fieldValue,
      fieldLabel,
      ...custom,
    } = this.props;
    const randNumber = Math.random();
    return (
      <FormControl
        style={{ width: width ? width : '100%', marginTop: '8px' }}
        ref={this.setTextInputRef}
      >
        <InputLabel htmlFor={`${fields.name}-${randNumber}`}>{label}</InputLabel>
        <Select
          input={<Input
            name={fields.name}
            data-parent={true}
            id={`${fields.name}-${randNumber}`}
            onClick={(event) => {
              const classDiv = event && event.target && event.target.getAttribute && event.target.getAttribute('class');
              if (classDiv) {
                if (classDiv.indexOf('MuiSelect-select') > -1 || classDiv.indexOf('SelectField-chips') > -1 || classDiv.indexOf('MultiSelect-chips') > -1) {
                  this.setState({
                    open: true,
                  });
                  return null;
                }
              }
              if (event.target.value) {
                this.setState({
                  open: true,
                });
                return null;
              }
              this.setState({
                open: false,
              });
            }}
          />}
          value={fields.getAll() || []}
          onChange={this.onChange}
          onClose={() => this.onClose()}
          onOpen={() => this.onOpen()}
          children={children}
          open={this.state.open}
          renderValue={selected => (
            <div className={classes.chips}>
              {_map(selected, (item, index) => {
                return (
                  <Chip
                    key={item[fieldValue]}
                    label={
                      <div>
                        {item[fieldLabel]}
                        <ButtonIcon
                          className={classes.btnIcon}
                          onClick={(event) => {
                            event.preventDefault();
                            fields.remove(index);
                          }}
                        >
                          <IconRemove />
                        </ButtonIcon>
                      </div>
                    }
                    className={classes.chip}
                  />
                );
              })}
            </div>
          )}
          {...custom}
        />
      </FormControl>
    );
  }
}

export default withStyles(styles)(MultiSelect);
