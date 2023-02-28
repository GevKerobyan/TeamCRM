import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { userSignup } from '../../../redux/slices/user/userAsyncs'

import { SignupBG } from './styled'
import { Form, FormTitle, FormWrapper, InputWrapper, SubmitBTN, LinkTo } from '../styled'

const SignupForm = () => {

  const { user } = useSelector(state => state)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')

  const handleSignupSubmit = e => {
    e.preventDefault()

    const user = {
      firstname: fName,
      lastname: lName,
      email: mail,
      password: pass
    }
    dispatch(userSignup({ user }))
  }

  useEffect(() => {
    if (user.data.isAuth) {
      navigate(`/user/${user.data.id}`);
    }
  }, [user])

  return (
    <FormWrapper>
      <SignupBG />
      <FormTitle>Sign Up</FormTitle>
      <Form onSubmit={e => handleSignupSubmit(e)}>
        <InputWrapper>
          <label htmlFor='firstName'>First name</label>
          <input id='firstName' type='text' placeholder='First name' onChange={e => setFName(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor='lastName'>Last name</label>
          <input id='lastName' type='text' placeholder='Last name' onChange={e => setLName(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor='mailAddress'>Email</label>
          <input id='mailAddress' type='text' placeholder='Email' onChange={e => setMail(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor='pass'>Password</label>
          <input id='pass' type='password' placeholder='Password' onChange={e => setPass(e.target.value)} />
        </InputWrapper>
        <SubmitBTN >Sign up</SubmitBTN>
        <LinkTo>Have an account ? <span><Link to='/login'>Login</Link></span></LinkTo>
      </Form>
    </FormWrapper>
  )
}

export default SignupForm