import { useSelector } from "react-redux"
import { SettingsGear } from "../../../assets/Icons"
import { NavDropdown, NavDropdownLine } from "./styled"


const ProfileDropdown = ({ props }) => {
  const { user, company } = useSelector(state => state)
  const { handleEditClick, handleSignout, dropDownTitle, dropdownsOpen, setDropdownsOpen } = props;

  console.log('consoling: props :::', props)
  const handleBlur = () => {
    setDropdownsOpen(false)
    console.log('consoling: blur :::', dropdownsOpen )
  }

  if(dropDownTitle === 'profile' && dropdownsOpen) { return (
    <NavDropdown onblur={handleBlur}>
      <NavDropdownLine onClick={handleEditClick}>
        <SettingsGear size='22' color='var(--mixed-dim-white)' />Edit
      </NavDropdownLine>
      <NavDropdownLine onClick={handleSignout}>
        Sign out
      </NavDropdownLine>
    </NavDropdown>
  )}
 return null
}

export default ProfileDropdown