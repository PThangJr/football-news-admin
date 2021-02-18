import React, { useState } from 'react';
import InputGroup from '../form/groups/InputGroup';
import { useForm } from 'react-hook-form';
import InputControl from '../form/controls/InputControl';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth } from '../../app/store/slice/authSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { Redirect, useHistory } from 'react-router-dom';

const LoginForm = () => {
  const schema = yup.object().shape({
    username: yup.string().required('Vui lòng nhập tên tài khoản').trim(),
    password: yup.string().required('Vui lòng nhập mật khẩu').trim().min(6, 'Mật khẩu phải lớn hơn 6 ký tự'),
  });
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const [errorMessage, setErrorMessage] = useState({});
  const history = useHistory();
  const handleSubmit = async (values) => {
    try {
      const userDispatch = await dispatch(fetchAuth(values));
      const user = unwrapResult(userDispatch);
      console.log(user);
      if (user) {
        history.push({
          pathname: '/admin',
        });
      }
      // console.log('login successfully');
    } catch (error) {
      console.log(error);
      setErrorMessage(error.error);
    }
  };
  return (
    <form className="form login" onSubmit={form.handleSubmit(handleSubmit)}>
      <h3 className="login__heading mt-30">Đăng nhập</h3>
      <div className="login-body">
        <InputControl
          form={form}
          message={errorMessage?.message}
          name="username"
          type="text"
          placeholder="Tên tài khoản"
        />
        <InputControl
          form={form}
          message={errorMessage?.message}
          name="password"
          type="password"
          placeholder="Mật khẩu"
        />
      </div>
      <div className="login-btn mt-30">
        <button type="submit" className="btn btn--submit">
          Đăng nhập
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
