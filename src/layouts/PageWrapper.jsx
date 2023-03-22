import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden  ;
`
const PageWrapper = ({children}) => {
  return (
    <PageContainer>
      {children}
    </PageContainer>
  )
}

export default PageWrapper