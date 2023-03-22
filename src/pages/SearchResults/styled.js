import styled from 'styled-components';

export const SearchPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  min-width: 60vw;
`;

export const CompaniesSection = styled.div`
padding: 10px 30px;
width: 100%;
flex-grow: 1;
display: flex;
align-items: flex-start;
flex-wrap: wrap;
justify-content: flex-start;
gap: 15px;
`;

export const UsersSection = styled.div`
padding: 10px 30px;
width: 100%;
flex-grow: 3;
display: flex;
align-items: flex-start;
flex-wrap: wrap;
justify-content: flex-start;
gap: 15px;
`