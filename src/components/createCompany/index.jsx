import { useState } from 'react'
import { CreateCompanyForm, LogoIMGPreviewBox } from './styled';
import { Typography, Button, TextField } from '@mui/material'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import { useDispatch, useSelector } from 'react-redux';
import { companyCreate } from '../../redux/slices/company/companyAsyncs';
import { useNavigate } from 'react-router';


const styles = {
   field: {
      marginTop: '20px',
      marginBottom: '20px',
      display: 'block'
   },
   fieldIMG: {
      width: '50%'
   },
   button: {
      width: '50%',
      margin: '20px 0',
   }
}

const CreateCompany = () => {

   const { user, company } = useSelector(state => state)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [name, setName] = useState('')
   const [address, setAddress] = useState('')
   const [page, setPage] = useState('')
   const [phone, setPhone] = useState('')
   const [companyLogo, setCompanyLogo] = useState('')

   const [logoPreview, setLogoPreview] = useState('')

   const handleSubmit = (e) => {

      e.preventDefault()

      const company = new FormData()
      company.append('name', name)
      company.append('address', address)
      company.append('webpage', page)
      company.append('phonenumber', phone)
      company.append('logo', companyLogo)
      company.append('description', 'barev')

      dispatch(companyCreate({ company }))
         .then(res=>{
            console.log('res in company NAVIGATE=====> ', res)
            navigate(`/company/${res.payload.company._id}`)})
   }

   const imgFilehandler = (e) => {
      if (e.target.files.length !== 0) {
         setCompanyLogo(e.target.files[0])
         setLogoPreview(URL.createObjectURL(e.target.files[0]))
      }
   }

   return (
      <CreateCompanyForm autoComplete="off" onSubmit={handleSubmit}>
         <Typography
            variant="h6"
            color="textSecondary"
            component="h2"
            align='left'
            width='100%'
         >
            Add Company
         </Typography>

         {/* =====> Company Name Input */}

         <TextField sx={styles.field}
            onChange={(e) => setName(e.target.value)}
            label="Company name"
            variant="outlined"
            color="secondary"
            fullWidth
            required
         />

         {/* =====> Company Address Input */}

         <TextField sx={styles.field}
            onChange={(e) => setAddress(e.target.value)}
            label="Address"
            variant="outlined"
            color="secondary"
            fullWidth
            required
         />

         {/* =====> Company Webpage Input */}

         <TextField sx={styles.field}
            onChange={(e) => setPage(e.target.value)}
            label="Webpage"
            variant="outlined"
            color="secondary"
            fullWidth
            required
         />

         {/* =====> Company Phone Input */}

         <TextField sx={styles.field}
            onChange={(e) => setPhone(e.target.value)}
            label="Phone number"
            variant="outlined"
            color="secondary"
            fullWidth
            type='number'
            required
         />

         {/* =====> Company Image Input */}

         <TextField
            sx={styles.fieldIMG}
            onChange={imgFilehandler}
            variant="outlined"
            color="secondary"
            fullWidth
            type='file'
         >
         </TextField>
         <LogoIMGPreviewBox>
            {companyLogo ? <img src={logoPreview} /> : null}
         </LogoIMGPreviewBox>
         <Button
            sx={styles.button}
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<ChevronRightOutlinedIcon />}>
            Submit
         </Button>
      </CreateCompanyForm>
   )
}
export default CreateCompany;