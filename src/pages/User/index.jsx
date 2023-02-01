import { useSelector } from 'react-redux'

const UserProfile = () => {

  const { user } = useSelector(state => state)
  return (
    <>
      <div>{user.data.id}</div>
    </>
  )
}
export default UserProfile