import { Divider } from "@mui/material"
import { ProjectCardWrapper, ProjectCardName, ProjectCardDescription } from "./styled"

const ProjectCard = ({ project }) => {
  const { companyId, description, owner_id, name, phonenumber } = project.data





  return (
    <ProjectCardWrapper>
      <ProjectCardName>{project.data.name}</ProjectCardName>
      <Divider sx={{ margin: '5px', background: 'white', width: '50%' }} />
      <ProjectCardDescription>{description}</ProjectCardDescription>
    </ProjectCardWrapper>
  )
}

export default ProjectCard