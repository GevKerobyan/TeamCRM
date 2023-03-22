import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import TaskColumn from './taskColumn'

import { TaskListWrapper, AddColumnWrapper, AddColumn, ColumnAddition, ColumnAdditionInput, ErrorWrapper } from './styled'

import { styled } from '@mui/material/styles';
import { Button, ButtonGroup, Input } from '@mui/material';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const TasksPageContent = () => {
  const { project } = useSelector(state => state)
  const [columns, setColumns] = useState([])
  const [columnTitle, setColumnTitle] = useState('')
  const [addColumnOpen, setAddColumnOpen] = useState(false)
  const [addColumnError, setAddColumnError] = useState('')

  useEffect(() => {
    project.data.tasks?.map(item => {
      if (item.stats && !columns.includes(item.status)) {
        setColumns(prev => [...prev, item.status])
      }
    })
  }, [])

  const ColorButton = styled(Button)(() => ({
    backgroundColor: 'var(--add-btn)',
    '&:hover': {
      backgroundColor: 'var(--add-btn-hover)',
    },
    color: 'white'
  }));

  const handleNewColumnClick = e => {
    e.preventDefault()
    if (columnTitle) {
      setColumns(prev => [...prev, columnTitle])
      setColumnTitle('')
      setAddColumnOpen(false)
    } else setAddColumnError('* Title required')
  }


  return (
    <>
      <TaskListWrapper>
        {columns?.map((column, i) => {
          return <TaskColumn title={column} key={i} />
        })}

        {!addColumnOpen
          ? <AddColumnWrapper>
            <AddColumn AddColumn onClick={() => setAddColumnOpen(true)}>
              <AddTaskOutlinedIcon fontSize='14px' />
              <span> Add a column</span>
            </AddColumn>
          </AddColumnWrapper>
          : <ColumnAddition>
            <form>
              <ColumnAdditionInput>
                <Input placeholder='Type in here…' type='textarea' variant='plain' fullWidth value={columnTitle} onChange={e => { setColumnTitle(e.target.value) }} onFocus={() => setAddColumnError('')} />
              </ColumnAdditionInput>
              <ErrorWrapper>{addColumnError}</ErrorWrapper>
              <ButtonGroup sx={{ display: 'flex', gap: '10px', padding: '5px 0', alignItems: 'center' }}>
                <ColorButton fullWidth onClick={e => handleNewColumnClick(e)} type='submit'>
                  Add
                </ColorButton>
                < CloseOutlinedIcon fontSize='small' style={{
                  cursor: 'pointer', '&:hover': {
                    background: 'red',
                  }
                }} onClick={() => setAddColumnOpen(false)} />
              </ButtonGroup>
            </form>
          </ColumnAddition>
        }
      </TaskListWrapper>
    </>
  )
}

export default TasksPageContent