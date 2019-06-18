import React from 'react';

const withAuth = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const token = localStorage.getItem('token');
      if (!token) {
        return window.location.href = '/login';
      }
      return <Component {...this.props} />;
    }
  };
};

export default withAuth;
