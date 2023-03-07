import { Popover } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axiosInstance from '../../axios/axiosConfig';
import { CardWrapper, CardIMGWrapper, CardTextWrapper, PopupButtonContainer, PopupButton } from '../styled'

import MoreButton from '@mui/icons-material/MoreVertOutlined';
import { Roles } from '../../utils';

const SearchUserCard = ({ mappedUser }) => {

  const { user, company } = useSelector(state => state)

  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()

  const handleCardClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCardPopupClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleCompanyInvitation = () => {
    axiosInstance.post('/invitations/company', {
      companyId: company.data.id,
      userId: mappedUser.id,
      roleName: Roles.PROJECT_MANAGER,
      active:true
    })
    setAnchorEl(null);
  }

  const handleProjectInvitation = () => {
    console.log('added to project')
    setAnchorEl(null);
  }

  return (
    <>
      <CardWrapper aria-describedby={id} >
        <CardIMGWrapper>
          <img src={mappedUser.photo}></img>
        </CardIMGWrapper>
        <CardTextWrapper>
          <p>{mappedUser.firstname}</p>
          <p>{mappedUser.lastname}</p>
        </CardTextWrapper>
        <MoreButton onClick={handleCardClick} fontSize='small' sx={{cursor: 'pointer'}}/>
      </CardWrapper>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCardPopupClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <PopupButtonContainer>
          <PopupButton onClick={() => navigate(`/user/${mappedUser.id}`)}><span>Profile</span></PopupButton>
          {user.data.id !== mappedUser.id && <PopupButton onClick={handleCompanyInvitation}><span>Invite to company</span></PopupButton>}
          {user.data.id !== mappedUser.id && <PopupButton onClick={handleProjectInvitation}><span>Add to project</span></PopupButton>}
        </PopupButtonContainer>
      </Popover>
    </>
  )
}

export default SearchUserCard