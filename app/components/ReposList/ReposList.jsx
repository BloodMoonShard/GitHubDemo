import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const ReposList = ({ classes, repos, repoSelected, onSelect }) => (
  <div className={classes.root}>
    <Divider />
    <h3>Repositories</h3>
    <List
      component="nav"
      aria-label="User repositories"
    >
      {
        repos.map((item) => {
          return (
            <ListItem
              key={item.name}
              button
              selected={repoSelected === item.name}
              onClick={() => onSelect(item.name)}
            >
              <ListItemText primary={item.name} />
              <ListItemText primary={`Stars ${item.stargazers.totalCount}`} />
              <ListItemText primary={`Watchers ${item.watchers.totalCount}`} />
            </ListItem>
          );
        })
      }
    </List>
  </div>
);
export default withStyles(styles)(ReposList);
