import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { userSignout } from '../../redux/slices/user/userAsyncs'
import { ModalBox } from '../index';

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
  Divider,
} from '@mui/material';

// =====> ICONS
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/NoteAdd';
import JoinCompanyIcon from '@mui/icons-material/JoinInnerOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';

// =====> STYLES
import { NavbarLink, NavDropdownLine, NavLogoIMG, ProfileImageBox, SearchInput, SearchInputWrapper } from './styled';

// =====> COMPONENTS
import { UsersGroup, CreateCompany, UserEdit } from '../../components';
import { useSearchParams } from 'react-router-dom';

const Navbar = () => {

  const { user, company } = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [anchorElCom, setAnchorElCom] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNotes, setAnchorElNotes] = useState(null);
  const [modalComponent, setModalComponent] = useState('')
  const { isAuth } = user.data

  const [modalOpen, setModalOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams('')
  const [searchText, setSearchText] = useState('')


  const handleOpenCompanyMenu = (event) => {
    setAnchorElCom(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenNotesMenu = (event) => {
    setAnchorElNotes(event.currentTarget);
  }

  const handleCloseCompanyMenu = () => {
    setAnchorElCom(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleEditClick = () => {
    setModalComponent(<UserEdit setModalOpen={setModalOpen}/>)
    setModalOpen(true)
  }

  const handleAddCompanyClick = () => {
    setModalComponent(<CreateCompany />)
    setModalOpen(true)
  }

  const handleSignOut = () => {
    const { refreshToken } = JSON.parse(localStorage.getItem('auth'))
    dispatch(userSignout({ refreshToken })).
    then(()=> navigate('/'))
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    window.location = `http://localhost:3000/search/?q=${searchText}`
  }

  return (
    <AppBar className='navbar' >
      <ModalBox component={modalComponent} open={modalOpen} setOpen={setModalOpen} />
      <Toolbar className='toolbar' sx={{ display: 'flex', gap: '50px' }} >
        <Typography
          variant='h1'
          noWrap
          component='a'
          onClick={() => navigate(`/user/${user.data.id}`)}
          sx={{
            mr: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'inherit',
            textDecoration: 'none',
            p: 0,
            cursor: 'pointer',
          }}
        >
          <NavLogoIMG >
            <h1>CRM</h1 >
          </NavLogoIMG>
        </Typography>

        {isAuth && <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexGrow: 1,
          gap: '50px'
        }}>

          <SearchInputWrapper >
            <form onSubmit={e => handleSearch(e)}>
              <SearchInput type='search' value={searchText} onChange={e => { setSearchText(e.target.value) }} placeholder='Find your match' />
              <button>
                <SearchIcon />
              </button>
            </form>
          </SearchInputWrapper>
          {/* Company menu */}

          <Tooltip title='Company details'>
            <IconButton onClick={handleOpenCompanyMenu} sx={{ p: 0 }}>
              <NavbarLink >
                {company.data?.name ? company.data?.name : <h2> Company </h2>}
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
            {company.data.name
              ? <div>
                <MenuItem onClick={() => navigate(`/company/${company.data.name}`)}>
                  <NavDropdownLine >
                    {company.data.name}
                  </NavDropdownLine >
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseCompanyMenu}>
                  <NavDropdownLine onClick={() => navigate(`/company/${company.data.name}/members`)}>
                    <UsersGroup title='View all members' />
                  </NavDropdownLine >
                </MenuItem>
                <Divider />
                <MenuItem  >
                  <NavDropdownLine >
                    Add project
                  </NavDropdownLine >
                </MenuItem>
              </div>
              : <div>
                <MenuItem onClick={handleCloseCompanyMenu}>

                  <Typography component={'div'} textAlign='center' >
                    <NavDropdownLine onClick={handleAddCompanyClick}>
                      <NotificationsIcon /> Add company
                    </NavDropdownLine >
                  </Typography>

                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseCompanyMenu}>

                  <Typography component={'div'} textAlign='center' >
                    <NavDropdownLine>
                      <JoinCompanyIcon /> Join a company
                    </NavDropdownLine >
                  </Typography>

                </MenuItem>
              </div>
            }
          </Menu>

          {/* Notification menu */}

          <Tooltip title='Notifications'>
            <IconButton onClick={handleOpenNotesMenu} sx={{ p: 0 }}>
              <NavbarLink>
                <NotificationsNoneIcon />
              </NavbarLink>
            </IconButton>
          </Tooltip>

          {/* Profile menu */}

          <Tooltip title='Open Profile'>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <NavbarLink>
                {user.data.photo
                  ? <ProfileImageBox>
                    <img src={user.data.photo} title='Eghav' />
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
            <MenuItem onClick={() => navigate(`/user/${user.data.id}`)}>
              <NavDropdownLine >
                <Typography textAlign='center' variant='body1'>
                  {user.data.firstname}
                </Typography>
              </NavDropdownLine >
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography component={'div'} textAlign='center' >
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

export default Navbar;