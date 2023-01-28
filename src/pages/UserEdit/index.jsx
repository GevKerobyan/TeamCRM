import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import EditUserForm from '../../components/forms/EditUserForm'
import UserSidebar from '../../components/userSidebar'
import { PageWrapper } from '../../layouts'

const UserEdit = () => {
  const { user } = useSelector(state => state)

  const [fName, setFName] = useState(user.data.firstname)
  const [lName, setLName] = useState(user.data.lastname)
  const [mail, setMail] = useState(user.data.email)
  const [pass, setPass] = useState(user.data.password)
  const [photo, setPhoto] = useState('')

  const [photoPreview, setPhotoPreview] = useState(user.data.photo)

  const [imagePreview, setImagePreview] = useState(user.data.photo)

  const inputRef =useRef('')

  const userStates = [
    [fName,
    setFName],
    [lName,
    setLName],
    [mail,
    setMail],
    [pass,
    setPass],
    [photo,
    setPhoto],
    [photoPreview,
    setPhotoPreview]
  ]

  return (
    <PageWrapper>
      <UserSidebar userStates={userStates} inputRef={inputRef}/>
      <EditUserForm userStates={userStates} inputRef={inputRef} />
    </PageWrapper>
  )
}

export default UserEdit