import styled from 'styled-components';

export const TaskColumnBox = styled.div`
  width: 20%;
  min-width: 255px;
  height: auto;
  background: rgba(235, 236,	240);
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ColumnTitle = styled.h1`
  font-size: 14px;
  padding: 5px 0;
  font-weight: 700;
`;

export const TaskColumnFooter = styled.div`
height: 35px;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
cursor: pointer;
border-radius: 5px;
padding: 0 10px;
font-size: 12px;
color: var(--mixed-blue-dark);

&:hover {
  background: var(--popup-btn);
}`;

export const TaskAddition = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: white;
`;

export const TaskAdditionInput = styled.div`
input {
  font-size: 13px;
}
`;

export const TaskAdditionButtons = styled.div`
`;