import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {MemberActions} from '../../components'
import getUser from '../../utils/getUser'
import MembersCard from './MembersCard'
import { MemberInfo, Members, PageWrapper, MemberInfoPhoto, MemberName, MemberCompany, MemberCompanyLogo, 
  MemberCompanyName, MemberProjects, ProjectCardContainer, CommonProjectCard } from './styled'
  import NoAccountsOutlinedIcon from '@mui/icons-material/NoAccountsOutlined';

const MembersList = () => {
  const { user, company } = useSelector(state => state)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const members = company.data.users
  const [clickedMember, setClickedMember] = useState('')


  const handleMemberSelect = async(member) => {
    const selectedUser = await getUser(member._id)
    setClickedMember(selectedUser)
  }

  return (
    <PageWrapper>
      <Members>
        {members.map(member => {
          return <MembersCard member={member} key={member._id} click={()=>handleMemberSelect(member)} />
        })}
      </Members>
      {clickedMember &&
        <MemberInfo>
          <MemberInfoPhoto>
          {clickedMember.photo ?
            <img src={ clickedMember.photo } />
            : <NoAccountsOutlinedIcon sx={{fontSize: '175px'}}/>
          }
            <MemberActions clickedMember={clickedMember} />
          </MemberInfoPhoto>
          <MemberName>
            <span>{clickedMember.firstname}</span><span>{clickedMember.lastname}</span>
          </MemberName>
          <MemberCompany>
            <MemberCompanyLogo>
              <img src="" alt="" />
            </MemberCompanyLogo>
            <MemberCompanyName onClick={() => navigate(`/company/${company.data.name}`)}>
            </MemberCompanyName>
          </MemberCompany>
          <MemberProjects>
            <h4 className='common_projects'>Common Projects</h4>
            <ProjectCardContainer>
              <CommonProjectCard></CommonProjectCard>
            </ProjectCardContainer>
          </MemberProjects>
        </MemberInfo>
      }
    </PageWrapper>
  )
}
/*
    companyId: 
    email: 
    firstname: 
    id: 
    lastname: 
    photo :
  */
export default MembersList

