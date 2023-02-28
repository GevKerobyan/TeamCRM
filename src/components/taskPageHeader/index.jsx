import { Button, Stack } from '@mui/material'
import { TaskListTopLine } from './styled'

const TaskPageHeader = () => {
  return (
    <TaskListTopLine>
      <Stack direction='row' spacing={2}>
        <Button sx={{
          color: 'var(--color-text)'
        }}>Primary</Button>
        <Button href='#text-buttons' sx={{
          color: 'var(--color-text)'
        }}>Link</Button>
      </Stack>
      <Stack direction='row' spacing={2}>
        <Button sx={{
          color: 'var(--color-text)'
        }}>Primary</Button>
        <Button href='#text-buttons' sx={{
          color: 'var(--color-text)'
        }}>Link</Button>
      </Stack>
    </TaskListTopLine>
  )
}

export default TaskPageHeader