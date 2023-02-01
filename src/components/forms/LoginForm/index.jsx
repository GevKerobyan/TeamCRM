import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { userLogin } from '../../../redux/slices/user/userAsyncs';
import { Form, FormTitle, FormWrapper, InputWrapper, LinkTo, SubmitBTN } from '../styled';
import {  LoginBG } from './styled'

const LoginForm = () => {

  const { user } = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loginMail, setLoginMail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  const handleLoginSubmit = useCallback((e) => {
    e.preventDefault()

    const user = {
      email: loginMail,
      password: loginPass
    }
    dispatch(userLogin({ user }))
  }, [loginMail, loginPass, user])

  useEffect(() => {
      if (user.data?.isAuth) {
        navigate(`/user/${user.data.id}`);
      }
  }, [user])

  return (
    <FormWrapper>
      <LoginBG />
      <FormTitle>Login</FormTitle>
      <Form onSubmit={handleLoginSubmit}>
        <InputWrapper>
          <label htmlFor='mailAddress'>Email</label>
          <input id='mailAddress' type='email' placeholder='Email' onChange={e => setLoginMail(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor='logPass'>Password</label>
          <input id='logPass' type='password' placeholder='Password' onChange={e => setLoginPass(e.target.value)} />
        </InputWrapper>
        <SubmitBTN >Login</SubmitBTN>
        <LinkTo>Need an account ? <span><Link to='/signup'>Sign up</Link></span></LinkTo>

      </Form>
    </FormWrapper>
  )
}

export default LoginForm