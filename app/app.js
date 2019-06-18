/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import LinearProgress from '@material-ui/core/LinearProgress';
import SnackBars from 'components/SnackBars';
import { CONST_URI_BACK } from './api';
import { createNetworkStatusNotifier } from 'react-apollo-network-status';

// Material-ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Import root app
import App from 'containers/App';

// Load the favicon
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
/* eslint-enable import/no-webpack-loader-syntax */

// Import CSS reset and Global Styles
// import 'styles/theme.scss';
import configureStore from './configureStore';

const {
  NetworkStatusNotifier,
  link: networkStatusNotifierLink,
} = createNetworkStatusNotifier();


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: networkStatusNotifierLink.concat(authLink.concat(
    createHttpLink(
      {
        uri: CONST_URI_BACK,
      },
    ),
    ),
  ),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('XXX');
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7986cb',
      main: '#2e2e2e',
      dark: '#2e2e2e',
      contrastText: '#fff',
      border: 'rgba(0,0,0, 0.12)',
      success: '#399151',
      error: '#d0021b',
    },
    background: {
      tableHead: '#f8f8f8',
    },
  },
  typography: {
    fontSize: '14px',
    h4: {
      fontSize: '1rem',
      lineHeight: 1.17,
    },
  },
  shape: {
    borderRadius: 0,
  },
});

const render = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={theme}>
            <React.Fragment>
              <CssBaseline />
              <NetworkStatusNotifier
                render={({ loading, error }) => {
                  const { graphQLErrors = [] } = error || {};
                  if (graphQLErrors.length > 0 && graphQLErrors[0].message === 'Not Authorized!') {
                    localStorage.removeItem('token');
                    history.push('/login');
                    return null;
                  }
                  return (
                    <React.Fragment>
                      {loading && <LinearProgress
                        color="primary"
                        variant="query"
                      />}
                      {error && <SnackBars
                        open={true}
                        variant="error"
                        message={JSON.stringify(error)}
                      />}
                    </React.Fragment>
                  );
                }
                }
              />
              <App history={history} />
            </React.Fragment>
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    </ApolloProvider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();