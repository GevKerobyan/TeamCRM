import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { userSignout } from '../../redux/slices/user/userAsyncs'
import { userSyncLogout } from '../../redux/slices/user/userSlice';

// =====> Material UI
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tooltip,
  IconButton,
  MenuItem,
  Menu,
} from '@mui/material';

// =====> ICONS
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

// =====> STYLES
import '../../root_styles/MUIStyles.css'
import { NavbarLink, NavDropdownLine, NavLogoIMG, ProfileImageBox } from './styled';

const NavbarMaterial = () => {

  const { user, company } = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [anchorElCom, setAnchorElCom] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { isAuth } = user.data

  const handleOpenCompanyMenu = (event) => {
    setAnchorElCom(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseCompanyMenu = () => {
    setAnchorElCom(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleEditClick = () => {
    console.log('consoling: user :::', user)
    navigate(`profile/${user.data.id}/edit`)
  }
  
  const handleSignOut = () => {
    dispatch(userSyncLogout())
    // dispatch(userSignout())
    navigate('/')
  }



  return (
    <AppBar className='navbar' >
      <Toolbar className='toolbar' >

        <Typography
          variant='h1'
          noWrap
          component='a'
          href='/'
          sx={{
            mr: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'inherit',
            textDecoration: 'none',
            p: 0,
          }}
        >
          <NavLogoIMG >
            <h1>CRM</h1 >
          </NavLogoIMG>
        </Typography>

       { isAuth && <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexGrow: 1,
          gap: '50px'
        }}>

          {/* Company menu */}
          <Tooltip title='Company details'>
            <IconButton onClick={handleOpenCompanyMenu} sx={{ p: 0 }}>
              <NavbarLink>
                {company.data.name ? company.data.name : <h2> Company </h2>}
                {anchorElCom ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              </NavbarLink>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElCom}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElCom)}
            onClose={handleCloseCompanyMenu}
          >
            <MenuItem onClick={handleCloseCompanyMenu}>
              {company.data.name
                ? <>
                  <Typography component={'div'}textAlign='center'>{company.data.name}</Typography>
                  <Typography component={'div'} textAlign='center'>Members</Typography>
                </>
                : <>
                  <Typography component={'div'} textAlign='center'>
                    <NavDropdownLine >
                      <NoteAddIcon />Add company
                    </NavDropdownLine >

                  </Typography>
                </>
              }
            </MenuItem>
          </Menu>
          <NotificationsNoneIcon />
          {/* Profile menu */}
          <Tooltip title='Open Profile'>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <NavbarLink>
                {user.data.photo
                  ? <ProfileImageBox>
                    <img src={user.data.photo} />
                  </ProfileImageBox>
                  : <PermIdentityIcon />
                }
                {anchorElUser ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              </NavbarLink>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography  component={'div'} textAlign='center' >
                <NavDropdownLine onClick={handleEditClick} >
                  <SettingsIcon /> Edit
                </NavDropdownLine>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography component={'div'}>
                <NavDropdownLine onClick={handleSignOut}>
                  <LogoutIcon /> Sign Out
                </NavDropdownLine>
              </Typography>
            </MenuItem>
          </Menu>
        </Box>}

      </Toolbar>
    </AppBar >
  );
};

export default NavbarMaterial;