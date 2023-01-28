import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { PageWrapper } from '../../layouts'
import { HomeBG, HomePageContainer, LinkContainer } from './styled'

const Home = () => {

  const {user} = useSelector(state => state)
  const navigate = useNavigate()

  useEffect(()=> {
    console.log('consoling: user.data.isAuth :::', user.data.isAuth )
    if(user.data.isAuth) {
      navigate(`/user/${user.data.id}`)
    }
  },[])

  return (
    <PageWrapper>
      <HomeBG />
      <HomePageContainer>
        <LinkContainer>
          <Link to='/login'>Login</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to='/signup'>Signup</Link>
        </LinkContainer>
      </HomePageContainer>
    </PageWrapper>
  )
}

export default Home