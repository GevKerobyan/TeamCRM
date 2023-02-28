import { useSelector } from 'react-redux'
import { TaskPageHeader, TasksPageContent } from '../../components'
import { UserDrawer } from '../../layouts'
import { ProjectPageWrapper } from './styled'

const Project = ({isOpen,  setIsOpen,  setChatUsers}) => {
  const { user, company, project } = useSelector(state => state)
  return (
    <ProjectPageWrapper>
      <TaskPageHeader />
      <UserDrawer isOpen={isOpen} setIsOpen={setIsOpen} setChatUsers={setChatUsers}/>
      <TasksPageContent projectId={ project.data.id} />
    </ProjectPageWrapper>
  )
}

export default Project