import { useEffect, useState, useRef } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { Avatar, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Slide, Stack, Typography } from '@mui/material'

import { ChatMiniBoxWrapper, ChatMiniBoxContent, SingleMessage, ChatMiniBoxFooter, ChatInput, InputButtonsRow } from './styled'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../redux/slices/messages/messagesSlice';
import { useNavigate } from 'react-router';
import Draggable from 'react-draggable';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';




const ChatMiniBox = ({ isOpen, setIsOpen, chatContacts }) => {
  const [message, setMessage] = useState('')

  const [isMinimized, setMinimized] = useState(!isOpen)

  const { user, chat, messages } = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const focusRef = useRef(null)

  const filteredMessages = messages.filter(message =>
    ((message.data.sender.sender_id === user.data.id) && (message.data.receiver.receiver_id === chatContacts._id))
    ||
    ((message.data.receiver.receiver_id === user.data.id) && (message.data.sender.sender_id === chatContacts._id))
  )

  const handleMessageSubmit = () => {
    if (message) {
      const time = Date.now()
      const messageObject = {
        sender: {
          sender_id: user.data.id,
          sender_photo: user.data.photo,
        },
        receiver: {
          receiver_id: chatContacts._id,
          receiver_photo: chatContacts.photo,
        },
        content: message,
        attachment: '',
        sent_time: time,
      }
      focusRef.current.innerText = ''
      focusRef.current.focus()
      dispatch(addMessage(messageObject))
      setMessage('')
    }
    return
  }

return (
    chatContacts &&  (
      <Draggable
        axis='x'
        handle='#handle'
        bounds='parent'
      >
        <Slide direction='up' in={isOpen} sx={{ zIndex: '10000' }}>
          <ChatMiniBoxWrapper isMinimized={isMinimized}>
            <ListItem disablePadding sx={{ padding: '5px 15px', background: 'var(--message-header)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '5px' }} >
              <ListItemAvatar>
                <Avatar src={chatContacts.photo} sx={{ width: 25, height: 25, cursor: 'pointer' }}
                  onClick={() => {
                    navigate(`/user/${chatContacts._id}`)
                  }} />
              </ListItemAvatar>
              <ListItemText primary={chatContacts.firstname} onClick={() => setMinimized(prev => !prev)} sx={{ cursor: 'pointer', width: 'auto' }} />
              <ControlCameraOutlinedIcon
                id='handle'
                sx={{ top: '9px', right: '7px', borderRadius: '5px', cursor: 'pointer', '&:hover': { background: 'var(--popup-btn)' } }}
              />
              {/* <DragIcon id='handle' size='15px' style={{cursor: 'pointer', background: 'red'}}/> */}
              <CloseIcon
                fontSize='small'
                sx={{ top: '9px', right: '7px', borderRadius: '5px', cursor: 'pointer', '&:hover': { background: 'var(--popup-btn)' } }}
                onClick={() => setIsOpen(false)} />
            </ListItem>
            <Divider />
            <ChatMiniBoxContent isMinimized={isMinimized}>
              {filteredMessages.map(item => {
                let contact;
                if (item.data.content) {
                  if (item.data.sender.sender_id === user.data.id) {
                    contact = true;
                  } else {
                    contact = false;
                  }
                  return (
                    <SingleMessage contact={contact ? 1 : 0} key={Math.random(10)}>
                      {!contact && <Avatar className='sender_photo' src={item.data.sender.sender_photo} sx={{ width: 20, height: 20 }} />}
                      <Typography align='left' variant='body2' contact={contact ? 1 : 0} sx={{ overflowWrap: 'break-word' }}> {item.data.content} </Typography>
                    </SingleMessage>)
                }
              }
              )}
            </ChatMiniBoxContent>
            <Divider />
            <ChatMiniBoxFooter>

              <ChatInput onSubmit={handleMessageSubmit} isMinimized={isMinimized}>
                <div contentEditable='true' ref={focusRef} value={message} placeholder='Say Something' onInput={(e) => {
                  setMessage(e.target.innerText)
                }} autoFocus />

                {message && <SendRoundedIcon onClick={handleMessageSubmit} fontSize='small' sx={{ position: 'absolute', right: '5px', fill: 'white', bottom: '40px' }} />}
              </ChatInput>
              <Divider sx={{ marginTop: '5px' }} />
              <Stack direction='row' alignItems='center' spacing={2} >
                <InputButtonsRow isMinimized={isMinimized} sx={{ ':hover': 'rgba(25, 118, 210, 0.04)' }}>
                  < SentimentSatisfiedOutlinedIcon />
                  <IconButton color='primary' aria-label='upload picture' component='label' >
                    <input hidden accept='image/*' type='file' />
                    <AttachmentOutlinedIcon sx={{ fontSize: '16px', cursor: 'pointer', color: 'black' }} />
                  </IconButton>
                </InputButtonsRow>
              </Stack>
            </ChatMiniBoxFooter>
          </ChatMiniBoxWrapper>
        </Slide>
      </Draggable>
    )
  )}

export default ChatMiniBox