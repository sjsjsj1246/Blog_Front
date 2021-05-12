import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../container/auth/LoginForm';

const LoginPage = (props) => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
