import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { userSignout } from '../../redux/slices/user/userAsyncs'

import { AngleUp, NotificationBell, ProfileHolder, SettingsGear } from '../../assets/Icons'
import { NavWrapper, NavLogo, NavLogoIMG, NavLink, NavLeft, NavRight, ProfileImageBox } from './styled'
import { userSyncLogout } from '../../redux/slices/user/userSlice'
import { extractParams } from '../../helpers'
import { ProfileDropdown, CompanyDropdown } from '../../components'

const Navbar = () => {


  const { user, company } = useSelector(state => state)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const location = useLocation()

  const pathName = extractParams(location)

  const { isAuth } = user.data

  const [dropDownTitle, setDropdownTitle] = useState('')
  const [dropdownsOpen, setDropdownsOpen] = useState(false)


  const handleDropDown = e => {
    // e.stopPropagation()
    console.log('consoling: e.target.title :::', e.target.title )
    setDropdownsOpen(true)
    setDropdownTitle(e.target.title)
  }

  useEffect(() => {
    console.log('consoling: user in NAVBAR :::', user)
  }, [user])

  const handleEditClick = () => {
    console.log('consoling: user :::', user)
    navigate(`profile/${user.data.id}/edit`)
  }
  const handleSignout = async () => {
    dispatch(userSyncLogout())
    console.log('consoling: hasav :::',)
    navigate('/')
    // dispatch(userSignout())
    //   .then(() => navigate('/'))
  }

  const profileDropdownProps = {
    handleEditClick,
    handleSignout,
    dropDownTitle,
    dropdownsOpen,
    setDropdownsOpen
  }

  return (
    <NavWrapper>
      <NavLogo>
        <Link to='/'>
          <NavLogoIMG >
            <h1>CRM</h1 >
          </NavLogoIMG>
        </Link>
      </NavLogo>
      {isAuth
        ? <>
          {/* <NavLeft>
          
           
          </NavLeft> */}
          <NavRight>
            <NavLink  title='notification' >
              <NotificationBell />
            </NavLink>
            <NavLink>
              <h2>Projects</h2>
              <AngleUp />
            </NavLink>
            <NavLink title='company' onClick={e => handleDropDown(e)}>
              {company.data.name ? company.data.name : <h2> Company </h2>}
              <AngleUp />
            </NavLink>
            <NavLink title='profile' onClick={e => handleDropDown(e)}>
              {user.data.photo
                ? <ProfileImageBox>
                  <img src={user.data.photo} />
                </ProfileImageBox>
                : <ProfileHolder />
              }
              <ProfileDropdown props = {profileDropdownProps}/>
                {/* <NavDropdown>
                  <NavDropdownLine onClick={handleEditClick}>
                    
                  </NavDropdownLine>
                  <NavDropdownLine onClick={handleSignout}>
                    Sign Out
                  </NavDropdownLine>
                </NavDropdown> */}
            </NavLink>
          </NavRight>
        </>
        : null
      }
    </NavWrapper>
  )
}

export default Navbar

