import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MembersCard = ({ member, click }) => {
  return (
    <Card sx={{ maxWidth: 100, cursor: 'pointer' }}>
      <CardMedia
        sx={{
          height: 100,
          filter: 'grayscale(50%)',
          '&:hover': {
            filter: 'grayscale(0)'
          }
        }}
        
        image={member.photo ? member.photo : null}
        title="green iguana"
        onClick={() => click(member.id)}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {member.firstname}
        </Typography>
      </CardContent>

    </Card>
  );
}

export default MembersCard