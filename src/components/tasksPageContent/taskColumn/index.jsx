import { ColumnTitle, TaskColumnBox, TaskColumnFooter, TaskAddition, TaskAdditionInput, TaskAdditionButtons } from "./styled"
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import TaskCard from "./taskCard"
import { useState } from "react";
import { Button, Input } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { taskCreate } from "../../../redux/slices/project/projectAsyncs";
import { useParams } from "react-router";

const TaskColumn = ({ title, tasks }) => {
  const { user, company, project } = useSelector(state => state)
  const { projectId } = useParams()
  const dispatch = useDispatch()
  const companyId = company.data.id

  const [addTaskOpen, setAddTaskOpen] = useState(false)
  
  const [taskTitle, setTaskTitle] = useState('')
  const [taskStatus, setTaskStatus] = useState('')
  
  const ColorButton = styled(Button)(() => ({
    backgroundColor: 'var(--add-btn)',
    '&:hover': {
      backgroundColor: 'var(--add-btn-hover)',
    },
    color: 'white'
  }));

  const handleNewTaskClick = (e, title) => {
    console.log('taskTitle =====> ', taskTitle)
    e.preventDefault()
    console.log('title =====>' , title)
    dispatch(taskCreate({ task: taskTitle, projectId, companyId }))
  }
  // project.data.tasks.forEach()
  return (

    <TaskColumnBox>
      <ColumnTitle>{title}</ColumnTitle>

      <TaskCard />
      {!addTaskOpen
        ? <TaskColumnFooter onClick={() => setAddTaskOpen(true)}>
          <AddTaskOutlinedIcon fontSize='14px' />
          <span> Add a card</span>
        </TaskColumnFooter>
        : <TaskAddition>
          <TaskAdditionInput>
            <Input placeholder='Type in here…' type='textarea' variant='plain' fullWidth value={taskTitle} onChange={e => { setTaskTitle(e.target.value, title) }} />
          </TaskAdditionInput>
          <ButtonGroup sx={{ display: 'flex', gap: '10px', padding: '5px 0', alignItems: 'center' }}>
            <ColorButton fullWidth onClick={e => handleNewTaskClick(e)}>
              Add
            </ColorButton>
            < CloseOutlinedIcon fontSize='small' style={{
              cursor: 'pointer', '&:hover': {
                background: 'red',
              }
            }} onClick={() => setAddTaskOpen(false)} />
          </ButtonGroup>

        </TaskAddition>
      }
    </TaskColumnBox>
  )
}

export default TaskColumn