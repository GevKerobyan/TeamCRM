import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import UserDrawer from '../../layouts/UserDrawer'
import { projectGet } from '../../redux/slices/project/projectAsyncs'

const UserProfile = ({isOpen,  setIsOpen,  setChatUsers}) => {

  const { user, company } = useSelector(state => state)
  const dispatch = useDispatch()
  const { id } = useParams()



  useEffect(() => {
    if (company.data.id) {
      const projectId = user.data.projects;
      const companyId = company.data.id;
      console.log('company.data =====> ', company.data)
      if (user.data.projects) {
        dispatch(projectGet({ projectId, companyId }))
      }
    }
  }, [user, company])

  return (
    <>
      {(user.data.id === id) && <UserDrawer isOpen={isOpen} setIsOpen={setIsOpen} setChatUsers={setChatUsers}/>}
      <div>{user.data.id}</div>
    </>
  )
}
export default UserProfile