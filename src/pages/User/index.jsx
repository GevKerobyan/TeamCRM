import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axiosInstance from '../../axios/axiosConfig'
import TemporaryDrawer from '../../components/drawer'

const UserProfile = () => {

  const { user } = useSelector(state => state)

  return (
    <>
    <div>{user.data.id}</div>
    <TemporaryDrawer />
    </>
  )
}

export default UserProfile