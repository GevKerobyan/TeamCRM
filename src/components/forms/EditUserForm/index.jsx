import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { DeleteIMGButton } from '../../../assets/Icons'
import { userEdit } from '../../../redux/slices/user/userAsyncs'
import { DeleteButtonContainer, Form, FormTitle, FormWrapper, InputWrapper, SubmitBTN } from '../styled'
import { EditBG } from './styled'


const EditUserForm = ({ userStates, inputRef, setModalOpen }) => {

  const { user } = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [fName, setFName] = userStates[0]
  const [lName, setLName] = userStates[1]
  const [mail, setMail] = userStates[2]
  const [pass, setPass] = userStates[3]
  const [photo, setPhoto] = userStates[4]

  const [photoPreview, setPhotoPreview] = userStates[5]

  const [deleteBtn, setDeleteBtn] = useState(false)

  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      setPhoto(e.target.files[0])
      setPhotoPreview(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleEditSubmit = e => {
    e.preventDefault()

    const eidtedUser = new FormData()
    eidtedUser.append('firstname', fName)
    eidtedUser.append('lastname', lName)
    eidtedUser.append('email', mail)
    eidtedUser.append('photo', photo)

    dispatch(userEdit({ eidtedUser }))
      .then(() => {
        setModalOpen(false)
        navigate(`/user/${user.data.id}`)})
  }


  return (
    <FormWrapper>
      <EditBG />
      <FormTitle>Edit your page</FormTitle>
      <Form onSubmit={e => handleEditSubmit(e)}>
        <InputWrapper>
          <label htmlFor='firstName'>First name</label>
          <input id='firstName' type='text' placeholder={fName} onChange={e => setFName(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor='lastName'>Last name</label>
          <input id='lastName' type='text' placeholder={lName} onChange={e => setLName(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor='mailAddress'>Email</label>
          <input id='mailAddress' type='text' placeholder={mail} onChange={e => setMail(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor='pass'>Password</label>
          <input id='pass' type='password' placeholder={pass} onChange={e => setPass(e.target.value)} />
        </InputWrapper>
        <InputWrapper className='img-box' onMouseEnter={() => setDeleteBtn(true)} onMouseLeave={() => setDeleteBtn(true)}>
          <label htmlFor='photo'>Photo</label>
          <input
            ref={inputRef}
            type='file'
            id='photo'
            onChange={imgFilehandler}
          />
          {deleteBtn && photoPreview && <DeleteButtonContainer onClick={() => {
            inputRef.current.value = ''
            setPhotoPreview('');
            setPhoto('')
          }}>
            <DeleteIMGButton color='white' />
          </DeleteButtonContainer>}
        </InputWrapper>
        <SubmitBTN >Save</SubmitBTN>
      </Form>
    </FormWrapper>
  )
}

export default EditUserForm