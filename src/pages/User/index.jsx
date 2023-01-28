import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axiosInstance from '../../axios/axiosConfig'

const UserProfile = () => {

  const { user } = useSelector(state => state)

  return (
    <div>{user.data.id}</div>
  )
}

export default UserProfile