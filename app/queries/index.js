import gql from 'graphql-tag';

const searchUser = gql`
    query search($searchString: String!){
        search(type: USER, query: $searchString, first: 100){
          userCount,
          nodes{
            ... on User{
              id,
              login,
              avatarUrl,
            }
          },
        }
      }
    `;

const getUserRepositories = gql`
    query getUserRepositories($login: String!){
        user(login: $login){
          repositories(first: 100, privacy: PUBLIC){
            nodes{
              name,
              stargazers{
                totalCount
              }
              watchers{
                totalCount
              }
            }
          }
        }
      }
    `;

const getIssuesRepository = gql`
    query getUserRepositories($owner: String!, $name: String!){
          repository(owner: $owner, name: $name){
            issues(first: 100){
              nodes{
                ... on Issue{
                  title
                }
              }
            }
          }
        }
`;


export default {
  searchUser,
  getUserRepositories,
  getIssuesRepository,
};
