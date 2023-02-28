import { useState } from 'react'
import { DeleteIMGButton, ProfileHolder } from '../../assets/Icons'
import { SidebarWrapper, SideImgPreview, SideInfo, SideInfoLine, DeleteButtonContainer } from './styled'

const UserSidebar = ({ userStates, inputRef }) => {

  const [fName, setFName] = userStates[0]
  const [lName, setLName] = userStates[1]
  const [mail, setMail] = userStates[2]
  const [pass, setPass] = userStates[3]
  const [photo, setPhoto] = userStates[4]

  const [photoPreview, setPhotoPreview] = userStates[5]

  const [deleteBtn, setDeleteBtn] = useState(false)

  return (
    <SidebarWrapper >
      <SideImgPreview onMouseEnter={() => setDeleteBtn(true)} onMouseLeave={() => setDeleteBtn(false)}>
        {deleteBtn && photoPreview && <DeleteButtonContainer
         onClick={() => {
          inputRef.current.value = ''
          setPhotoPreview(''); 
          setPhoto('')
        }}><DeleteIMGButton /></DeleteButtonContainer>}
        {photoPreview ? <img src={photoPreview} alt="avatar" /> : <ProfileHolder color='rgba(57, 42, 72, 1)' size='100' />}
      </SideImgPreview>
      <SideInfo>
        <SideInfoLine> Name: {fName} {lName}</SideInfoLine>
        <SideInfoLine>Mail: {mail}</SideInfoLine>
      </SideInfo>
    </SidebarWrapper>
  )
}

export default UserSidebar