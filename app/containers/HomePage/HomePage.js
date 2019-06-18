import React, { PureComponent } from 'react';
import { MainTemplate } from 'components/Layouts';
import { withStyles, Grid, Typography } from 'components/UI';
import _get from 'lodash/get';
import { UserSearch } from 'components/Forms';
import { Query } from 'react-apollo';
import { UsersList } from 'components/UsersList';
import { ReposList } from 'components/ReposList';
import { IssuesList } from 'components/IssuesList';
import { default as queries } from 'queries';
import style from './styleJS';

class HomePage extends PureComponent {
  constructor() {
    super();
    this.state = {
      queryUser: null,
      loginSelected: null,
      repoSelected: null,
    };
  }

  setInitialState = () => {
    this.setState({
      loginSelected: null,
      repoSelected: null,
    });
  };

  updateSearchUserString = ({ userSearch }) => {
    this.setState({
      queryUser: userSearch
    }, this.setInitialState);
  };

  onSelectLogin = (login) => {
    this.setState({
      loginSelected: login,
    });
  };

  onSelectRepo = (repo) => {
    this.setState({
      repoSelected: repo,
    });
  };

  createNewIssue = () => {

  };

  render() {
    const { queryUser, loginSelected, repoSelected } = this.state;
    const { classes } = this.props;
    return (
      <MainTemplate className={classes.root}>
        <UserSearch onSubmit={this.updateSearchUserString} />
        {
          queryUser &&
          <Query
            query={queries.searchUser}
            variables={{ searchString: queryUser }}
          >
            {({ data, loading }) => {
              if (loading) return null;
              const users = _get(data, 'search.nodes');
              return (<UsersList
                users={users}
                onSelect={this.onSelectLogin}
                loginSelected={loginSelected}
              />);
            }}
          </Query>
        }
        <Grid container justify="flex-start" spacing={8}>
          <Grid item>
            {
              loginSelected &&
              <Query
                query={queries.getUserRepositories}
                variables={{ login: loginSelected }}
              >
                {({ data, loading }) => {
                  if (loading) return null;
                  const repos = _get(data, 'user.repositories.nodes');
                  return (<ReposList
                    repos={repos}
                    onSelect={this.onSelectRepo}
                    repoSelected={repoSelected}
                  />);
                }}
              </Query>
            }
          </Grid>
          <Grid item>
            {
              repoSelected &&
              <Query
                query={queries.getIssuesRepository}
                variables={{ owner: loginSelected, name: repoSelected }}
              >
                {({ data, loading }) => {
                  if (loading) return null;
                  const issues = _get(data, 'repository.issues.nodes');
                  return (<IssuesList
                    issues={issues}
                    onAdd={this.createNewIssue}
                  />);
                }}
              </Query>
            }
          </Grid>
        </Grid>
      </MainTemplate>
    );
  }
}

export default withStyles(style)(HomePage);
