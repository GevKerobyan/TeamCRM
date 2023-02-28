import { Avatar, Stack } from '@mui/material';
import { useSelector } from 'react-redux';

const UsersGroup = () => {
  const { company } = useSelector(state => state)
  const users = company.data.users
  return (

    // <AvatarGroup>
    //   {users.map(user => {
    //   return <Avatar title={user.firstname}>{user.photo}</Avatar>
    //   })}
    // </AvatarGroup>
    
    <Stack direction='row' spacing={0}>
      {users.map((user, index) => {
        if (index === 4) return
        return <Avatar alt={user.firstname} title={user.firstname} src={user.photo} key={index} sx={{ width: 24, height: 24 }}/>
      })}
    </Stack>
  )
}

export default UsersGroup