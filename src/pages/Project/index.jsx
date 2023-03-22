import { useSelector } from 'react-redux'
import { TasksPageContent } from '../../components'
import { ProjectPageWrapper } from './styled'

const Project = () => {
  const { user, company, project } = useSelector(state => state)
  return (
    <ProjectPageWrapper>
      <TasksPageContent projectId={ project.data.id} />
    </ProjectPageWrapper>
  )
}

export default Project