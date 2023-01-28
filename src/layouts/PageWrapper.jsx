import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const PageWrapper = ({children}) => {
  return (
    <PageContainer>
      {children}
    </PageContainer>
  )
}

export default PageWrapper