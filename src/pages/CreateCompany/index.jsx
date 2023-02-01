import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Button, Container, TextField } from '@mui/material'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import { CreateCompanyForm, LogoIMGPreviewBox } from './styled';

const useStyles = makeStyles({
   field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
   }
})

export default function Create() {
   const classes = useStyles()
   const [title, setTitle] = useState('')
   const [details, setDetails] = useState('')
   const [titleError, setTitleError] = useState(false)
   const [detailsError, setDetailsError] = useState(false)
   const [phone, setPhone] = React.useState('')

   const [companyLogo, setCompanyLogo] = useState('')

   const [logoPreview, setLogoPreview] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      setTitleError(false)
      setDetailsError(false)

      if (title == '') {
         setTitleError(true)
      }
      if (details == '') {
         setDetailsError(true)
      }
      if (title && details) {
         console.log(title, details)
      }
   }

   const handleChange = () => {
      console.log('pphone')
   }

   const imgFilehandler = (e) => {
      if (e.target.files.length !== 0) {
         setCompanyLogo(e.target.files[0])
         setLogoPreview(URL.createObjectURL(e.target.files[0]))
      }
   }

   return (
      <CreateCompanyForm autoComplete="off">

         <Typography
            variant="h6"
            color="textSecondary"
            component="h2"
            align='left'
            width='100%'
         >
            Add Company
         </Typography>

         <TextField className={classes.field}
            onChange={(e) => setTitle(e.target.value)}
            label="Company name"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
         />
         <TextField className={classes.field}
            onChange={(e) => setDetails(e.target.value)}
            label="Address"
            variant="outlined"
            color="secondary"

            fullWidth
            required
            error={detailsError}
         />

         <TextField className={classes.field}
            onChange={imgFilehandler}
            label="Webpage"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={detailsError}
         />

         <TextField className={classes.field}
            onChange={(e) => setDetails(e.target.value)}
            label="Phone number"
            variant="outlined"
            color="secondary"
            fullWidth
            type='number'
            required
            error={detailsError}
         />

         <TextField className={classes.field}
            onChange={(e) => setDetails(e.target.value)}
            variant="outlined"
            color="secondary"
            fullWidth
            type='file'
            error={detailsError}
         ><LogoIMGPreviewBox>
         {companyLogo ? <img src={logoPreview} /> : 123}
      </LogoIMGPreviewBox></TextField>

         <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<ChevronRightOutlinedIcon />}>
            Submit
         </Button>


      </CreateCompanyForm>
   )
}
