import styled from 'styled-components';

export const DrawerProjectsContainer = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  cursor: pointer;
`;

export const DrawerSingleProjectBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const DrawerSingleProjectLogo = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DrawerDingleProjectTitle = styled.div`
  flex-grow: 1;
  font-size: 12px;
`;

export const AddProjectBox = styled.div`
 width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  cursor: pointer;
  font-size: 13px;
`