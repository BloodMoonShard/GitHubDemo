import React from 'react';
import PropTypes from 'prop-types';
import withAuth from 'hoc/withAuth';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Icon,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  MenuIcon,
  ExpandMore,
  Button,
  Grow,
  Popper,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  ProjectIcons,
} from 'components/UI';

import { Menu } from './Menu';
import styles from './styleJS';


class MainTemplate extends React.Component {
  state = {
    open: true,
    openSubmenu: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handlerSubmenuToggle = () => {
    this.setState(({ openSubmenu }) => ({
      openSubmenu: !openSubmenu,
    }));
  };

  logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  render() {
    const { classes, className, pageName } = this.props;
    const { openSubmenu } = this.state;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar
            disableGutters={!this.state.open}
            className={classes.toolbar}
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              noWrap
              className={classNames(classes.title, !this.state.open && classes.toolbarHidden)}
            >
              {pageName}
            </Typography>
            <React.Fragment>
              <Button
                buttonRef={node => {
                  this.anchorEl = node;
                }}
                aria-owns={openSubmenu ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={this.handlerSubmenuToggle}
              >
                <ProjectIcons name="Userpic" />
                <Typography
                  component="span"
                  variant="body1"
                  noWrap
                >
                  Demo
                </Typography>
                <Icon
                  fontSize="small"
                  color="inherit"
                >
                  <ExpandMore />
                </Icon>
              </Button>
              <Popper
                open={openSubmenu}
                anchorEl={this.anchorEl}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    id="menu-list-grow"
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={this.handlerSubmenuToggle}>
                        <MenuList>
                          <MenuItem onClick={this.logout}>Exit</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </React.Fragment>
          </Toolbar>
          <Divider />
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton
              className={classes.menuButton}
              onClick={this.handleDrawerClose}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Divider />
          <List className={classes.menuList}>
            <Menu />
          </List>
        </Drawer>
        <main className={classNames(classes.content, className)}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  pageName: PropTypes.string,
};

MainTemplate.defaultProps = {
  pageName: 'Home page',
};

export default withAuth(withStyles(styles)(MainTemplate));
