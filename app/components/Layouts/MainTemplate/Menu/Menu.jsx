import React, { PureComponent } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ExpandLess,
  ExpandMore,
  Collapse,
  Divider,
  List,
} from 'components/UI';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styleJS';
import menuPoint from '../__data__/menuPoint';

class Menu extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      openedGroup: [],
    };
  }

  onOpen = (item) => {
    this.setState(({ openedGroup }) => {
      if (openedGroup.indexOf(item) === -1) {
        openedGroup = [
          ...openedGroup,
          item,
        ];
      } else {
        openedGroup = openedGroup.filter(value => value !== item);
      }
      return {
        openedGroup: openedGroup,
      };
    });
  };

  render() {
    const { classes } = this.props;
    const { openedGroup } = this.state;
    return (
      <React.Fragment>
        {
          menuPoint.map((item) => {
            const opened = openedGroup.indexOf(item.id) !== -1;
            return (
              <React.Fragment
                key={`${item.id}__item`}
              >
                <ListItem
                  button
                  className={classes.menuItem}
                  component={props => item.link && !item.child ? <Link to={item.link || ''} {...props} /> :
                    <ListItem {...props} />}
                  onClick={item.child ? () => this.onOpen(item.id) : () => {
                  }}
                >
                  <ListItemIcon className={classes.iconMenu}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary={item.title}
                  />
                  {item.child && (opened ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
                {item.child && <Collapse
                  in={opened}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                    key={item.id}
                  >
                    {item.child.map((value) => (
                      <ListItem
                        component={props => <Link to={value.link || ''} {...props} />}
                        button
                        className={classes.nested}
                        key={value.id}
                      >
                        <ListItemIcon className={classes.iconMenu}>
                          {value.icon}
                        </ListItemIcon>
                        <ListItemText
                          inset
                          primary={value.title}
                        />
                      </ListItem>
                    ))
                    }
                  </List>
                </Collapse>}
                <Divider />
              </React.Fragment>
            );
          })
        }
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Menu);
