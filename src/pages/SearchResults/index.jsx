import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axiosInstance from '../../axios/axiosConfig'

import { CompaniesSection, SearchPageWrapper, UsersSection } from './styled';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Chip, Divider } from '@mui/material';
import { SearchCompanyCard, SearchUserCard } from '../../containers';
import { styled } from '@mui/material/styles';

const CircularIndeterminate = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

const SearchResults = () => {

  const [loading, setLoading] = useState(true)

  const [companiesResults, setCompaniesResults] = useState([])
  const [usersResults, setUsersResults] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()
  const searchString = searchParams.get('q')
  const navigate = useNavigate()

  // ====> POPOVER FUNCTIONALITY

  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleCardClick = (event) => {

  //   console.log('consoling: openClick popover :::', event.target)
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleCardPopupClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

  // ====> ====> ====> <==== <==== <==== \\ 

  const handleCompanyClick = id => {
    navigate(`/company/${id}`)
  }

  const handleUserClick = id => {
    navigate(`/user/${id}`)
  }

  // useEffect(() => {
  //   console.log('consoling: searchString :::', searchString)
  // }, [])

  const getSearchResults = async () => {
    setLoading(true)
    try {
      const res = await axiosInstance.post('/user/search', { text: searchString });
      console.log('res in getSearchResults =====> ', res.data)
      setCompaniesResults(res.data.companies)
      setUsersResults(res.data.users)
    } catch (error) {
      console.log('error in getSearchResults =====> ', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getSearchResults()
  }, [])

  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

  return (
    <SearchPageWrapper>
      {loading && <CircularIndeterminate />}
      <Root>
        <Divider textAlign='left' flexItem variant='middle' sx={{ margin: '15px 0' }} role='presentation'><Chip label='Companies' /></Divider>
      </Root>
      <CompaniesSection>
        {companiesResults.length >= 1
          ? companiesResults.map((foundCompany, index) => {
            return (
              <SearchCompanyCard key={foundCompany.id} mappedCompany={foundCompany} handleClick={handleCompanyClick} />
            )
          })
          : <h2>No such company found</h2>
        }
      </CompaniesSection>
      <Root>
        <Divider flexItem textAlign='left' role='presentation' sx={{ margin: '15px 0' }} ><Chip label='Users' /></Divider>
      </Root>
      <UsersSection>
        {usersResults.length >= 1
          ? usersResults.map(foundUser => {
            return (
              <SearchUserCard key={foundUser.id} mappedUser={foundUser} />
            )
          })
          : <h2>No such user found</h2>}
      </UsersSection>
    </SearchPageWrapper>

  )
}

export default SearchResults