import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { width } from '@mui/system';
import { useNavigate } from 'react-router';
import { TeamIcon } from '../../assets/Icons';

const actions = [
  { icon: <AccountCircleOutlinedIcon fontSize='20' width='25px' />, name: 'Profile', title: 'Go to Profile', click: 'handleProfileCLick' },
  { icon: <TeamIcon width='25px'  />, name: 'Invite', title: 'Invite to project', click: 'handleInviteClick' },

];

const MemberActions = ({ clickedMember }) => {
  const navigate = useNavigate()
  const handleClick = action => {
    if (action.name === 'Profile') {
      navigate(`/user/${clickedMember.id}`)
    }
    if (action.name === 'Invite') {
      console.log('InviteClick')
    }
  }



  return (
    <Box sx={{ position: 'absolute', height: '50%', width: '35px', transform: 'translateZ(0px)', flexGrow: 1, bottom: 10, right: 10 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ height: '100%', '& button': { width: '35px', height: '25px', background: 'var(--color-text)' } }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            title={action.title}
            onClick={() => { handleClick(action) }}
            sx={{ width: '35px', '&button': { background: 'yellow' } }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default MemberActions