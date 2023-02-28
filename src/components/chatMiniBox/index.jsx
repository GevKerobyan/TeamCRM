import { Avatar, Divider, Input, ListItem, ListItemAvatar, ListItemText, Slide, TextareaAutosize, Typography } from "@mui/material"
import ImageIcon from '@mui/icons-material/Image';
import CloseIcon from '@mui/icons-material/Close';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';


import { ChatMiniBoxWrapper, ChatMiniBoxContent, SingleMessage, InputButtonsRow } from "./styled"
import { useEffect, useState } from "react";

const ChatMiniBox = ({ isOpen, setIsOpen, chatUsers }) => {

  const [message, setMessage] = useState('')

  const handleMessageSubmit = () => {
      console.log('message =====> ', message)
  }

  return (
    <Slide direction='up' in={isOpen}>
      <ChatMiniBoxWrapper>
        <ListItem disablePadding sx={{ padding: '5px 15px' }}>
          <ListItemAvatar>
            <Avatar src={chatUsers.photo} sx={{ width: 25, height: 25 }} />
          </ListItemAvatar>
          <ListItemText primary={chatUsers.firstname} secondary="Jan 9, 2014" />
          <CloseIcon fontSize="small" sx={{ position: 'absolute', top: '5px', right: '5px' }} onClick={() => setIsOpen(false)} />
        </ListItem>
        <Divider />
        <ChatMiniBoxContent>
          <SingleMessage>
            <Avatar className='sender_photo' src={chatUsers.photo} sx={{ width: 20, height: 20 }} />
            <Typography align='left' variant='body2' sx={{ overflowWrap: 'break-word' }}>{chatUsers._id}, {chatUsers.firstname} asdasdasdasdasdasdasdasdasdasdadadasdasdasdasdasdasdas</Typography>
          </SingleMessage>
        </ChatMiniBoxContent>
        <Divider />
        <form style={{ display: 'flex', justifyContent: 'center' }} onSubmit={handleMessageSubmit}>
          <Input
            type='text'
            placeholder='Type Here'
            autoFocus={true}
            disableUnderline
            fullWidth
            multiline
            sx={{
              fontSize: '12px',
              padding: '0 30px 0 15px',
              maxHeight: '50px',
              background: 'white',
              overflow: 'auto',
            }}
            onChange={(e) => setMessage(e.target.value)}
          >
          </Input>
          {message && <SendRoundedIcon fontSize='small' sx={{ position: 'absolute', right: '5px', fill: 'gray', bottom: '40px' }} />}

        </form>
        <Divider />
        <InputButtonsRow>
          <AttachmentOutlinedIcon />
          < EmojiEmotionsOutlinedIcon />
        </InputButtonsRow>
      </ChatMiniBoxWrapper>
    </Slide>
  )
}

export default ChatMiniBox