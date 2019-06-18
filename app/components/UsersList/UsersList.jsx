import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    height: '200px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  isSelected: {
    border: 'solid 1px blue'
  },
  gridList: {
    width: '100%',
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  item: {
    boxSizing: 'border-box',
    cursor: 'pointer',
  }
});

const UsersList = ({ users, classes, loginSelected, onSelect = () => {} }) => {
  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        cols={users.length < 10 ? 10 : users.length}
      >
        {users.map((user) => (
          <GridListTile
            key={user.login}
            className={classnames(
              classes.item,
              user.login === loginSelected ? classes.isSelected : ''
            )}
            onClick={() => {
              onSelect(user.login);
            }}
          >
            <img
              src={user.avatarUrl}
              alt={user.login}
            />
            <GridListTileBar
              title={user.login}
              classes={{
                root: classes.titleBar,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withStyles(styles)(UsersList);
