import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { projectGet } from '../../redux/slices/project/projectAsyncs'
import { Chip, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { UserPageLayout, UserPageCompanySection, UserPageCompanyLogoWrapper, UserPageCompanyInfo, UserCompanyInfoLine, UserPageProjectSection } from './styled';
import {ProjectCard} from '../../components/';



const UserProfile = () => {

  const { user, company, project } = useSelector(state => state)
  const [dataLoaded, setDataLoaded] = useState(false)
  const dispatch = useDispatch()

  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

  // useEffect(() => {
  //   console.log('consoling: project :::', project)
  // }, [project])

  useEffect(() => {
    if (company.data.id) {
      const projectId = user.data.projects;
      const companyId = company.data.id;
      if (user.data.projects) {
        dispatch(projectGet({ projectId, companyId }))
      }
    }
  }, [user, company])

  return (

    <UserPageLayout>
      <Root>
        <Divider textAlign='left' flexItem variant='middle' sx={{ margin: '15px 0' }} role='presentation'><Chip label='Company' /></Divider>
      </Root>
      <UserPageCompanySection>
        <UserPageCompanyLogoWrapper>
          <img src={user.data.company?.logo} alt='N/A' />
        </UserPageCompanyLogoWrapper>
        <UserPageCompanyInfo>
          {company.data.name && <UserCompanyInfoLine> {company.data.name} </UserCompanyInfoLine>}
          {company.data.address && <UserCompanyInfoLine> {company.data.address} </UserCompanyInfoLine>}
          {company.data.webpage && <UserCompanyInfoLine> {company.data.webpage} </UserCompanyInfoLine>}
          {company.data.phonenumber && <UserCompanyInfoLine> {company.data.phonenumber} </UserCompanyInfoLine>}
        </UserPageCompanyInfo>
      </UserPageCompanySection>

      <Root>
        <Divider textAlign='left' flexItem variant='middle' sx={{ margin: '15px 0' }} role='presentation'><Chip label='Project' /></Divider>
      </Root>
      <UserPageProjectSection>
        <ProjectCard project={project}></ProjectCard>
      </UserPageProjectSection>

    </UserPageLayout>
  )
}
export default UserProfile