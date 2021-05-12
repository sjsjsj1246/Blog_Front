import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../container/auth/RegisterForm';

const RegisterPage = (props) => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
