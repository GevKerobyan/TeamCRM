import { useState } from 'react'
import { CreateProjectForm, LogoIMGPreviewBox } from './styled';
import { Typography, Button, TextField } from '@mui/material'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import { useDispatch, useSelector } from 'react-redux';
import { projectCreate } from '../../redux/slices/project/projectAsyncs';


const styles = {
  field: {
    marginTop: '20px',
    marginBottom: '20px',
    display: 'block'
  },
  fieldIMG: {
    margin: '15px 0',
    width: '50%'
  },
  button: {
    width: '50%',
    margin: '15px 0',
  },
  description: {
    width: '100%',
    border: 'none',
    margin: '15px 0',
    padding: '10px',
    outlineColor: 'primary',
  }

}

const CreateProject = ({setOpen}) => {

  const { company } = useSelector(state => state)
  const dispatch = useDispatch()

  const [projectName, setProjectName] = useState('')
  const [projectPhone, setProjectPhone] = useState('')
  const [projectLogo, setProjectLogo] = useState('')
  const [projectDescription, setProjectDescription] = useState('')

  const [logoPreview, setLogoPreview] = useState('')

  const handleSubmit = (e) => {
    const companyId = company.data.id
    e.preventDefault()

    const project = new FormData()

    project.append('name', projectName)
    project.append('phonenumber', projectPhone)
    project.append('logo', projectLogo)
    project.append('description', projectDescription)

    dispatch(projectCreate({ project, companyId  }))
      .then(() => {
        setOpen(false)
      })
  }

  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      setProjectLogo(e.target.files[0])
      setLogoPreview(URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <CreateProjectForm autoComplete='off' onSubmit={handleSubmit}>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        align='left'
        width='100%'
      >
        Add Project
      </Typography>

      {/* =====> Project Name Input */}

      <TextField sx={styles.field}
        onChange={(e) => setProjectName(e.target.value)}
        label='Project name'
        variant='outlined'
        color='secondary'
        fullWidth
        required
      />

      {/* =====> Project Phone Input */}

      <TextField sx={styles.field}
        onChange={(e) => setProjectPhone(e.target.value)}
        label='Phone number'
        variant='outlined'
        color='secondary'
        fullWidth
        type='number'
        required
      />

      {/* =====> Project Description Input */}

      <TextField sx={styles.field}
        onChange={(e) => setProjectDescription(e.target.value)}
        label='Description'
        variant='outlined'
        color='secondary'
        fullWidth
        multiline
        required
      />

      {/* =====> Project Image Input */}

      <TextField
        sx={styles.fieldIMG}
        onChange={imgFilehandler}
        variant='outlined'
        color='secondary'
        fullWidth
        type='file'
      >
      </TextField>
      <LogoIMGPreviewBox>
        {projectLogo ? <img src={logoPreview} /> : null}
      </LogoIMGPreviewBox>
      <Button
        sx={styles.button}
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<ChevronRightOutlinedIcon />}>
        Submit
      </Button>
    </CreateProjectForm>
  )
}
export default CreateProject;