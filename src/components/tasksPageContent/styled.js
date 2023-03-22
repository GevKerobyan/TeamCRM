import styled from 'styled-components';

export const TaskListWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 50px;
	padding: 25px;
`;


export const AddColumnWrapper = styled.div`
	width: 20%;
	min-width: 255px;
	height: auto;
	background: rgba(235, 236, 240);
	padding: 10px;
	border-radius: 4px;
`;

export const AddColumn = styled.div`
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
	}
`;

export const ColumnAddition = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: white;
`;

export const ColumnAdditionInput = styled.div`
input {
  font-size: 13px;
}`

export const ColumnAdditionButtons = styled.div`
`

export const ErrorWrapper = styled.p`
	color: var(--mixed-red);
	margin-top: 5px;
	text-align: left;
	font-size: 12px;
	font-style: oblique;
	

`