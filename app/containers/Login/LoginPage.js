import React, { PureComponent } from 'react';
import { AuthTemplate } from 'components/Layouts';
import { Login } from 'components/Forms';
import PropTypes from 'prop-types';


class LoginPage extends PureComponent {
  saveToken = (token) => {
    if (!token) return null;
    localStorage.setItem('token', token);
    window.location.href = '/';
    return 0;
  }

  render() {
    return (
      <AuthTemplate>
        <Login onSubmit={({ token }) => this.saveToken(token)} />
      </AuthTemplate>
    );
  }
}

LoginPage.propTypes = {
  submitLoginForm: PropTypes.func,
};

export default LoginPage;
