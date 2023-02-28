import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'

// import {UserSidebar} from '../index'
import { PageWrapper } from '../../layouts'
import {EditUserForm} from '../forms'

const UserEdit = ({setModalOpen}) => {
  const { user } = useSelector(state => state)

  const [fName, setFName] = useState(user.data.firstname)
  const [lName, setLName] = useState(user.data.lastname)
  const [mail, setMail] = useState(user.data.email)
  const [pass, setPass] = useState(user.data.password)
  const [photo, setPhoto] = useState(user.data.photo)

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
      {/* <UserSidebar userStates={userStates} inputRef={inputRef}/> */}
      <EditUserForm userStates={userStates} inputRef={inputRef} setModalOpen={setModalOpen}/>
    </PageWrapper>
  )
}

export default UserEdit