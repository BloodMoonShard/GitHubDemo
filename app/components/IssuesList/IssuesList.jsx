import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const IssuesList = ({ classes, issues = [], onClick }) => (
  <div className={classes.root}>
    <Divider />
    <h3>Issues</h3>
    {issues.length === 0 && <div>List of issues is empty</div>}
    <List
      component="nav"
      aria-label="User issues by repository"
    >
      {
        issues && issues.map((item) => {
          return (
            <ListItem
              key={item.name}
              button
              onClick={() => onClick(item.name)}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          );
        })
      }
    </List>
  </div>
);
export default withStyles(styles)(IssuesList);
