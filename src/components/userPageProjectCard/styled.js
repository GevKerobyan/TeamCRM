import styled from 'styled-components';

export const ProjectCardWrapper = styled.div`
	height: 200px;
	width: 150px;
	border-radius: 10px;
	font-size: 14px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 10px ;
	background: var(--sidebar-BG);
	box-shadow: 2px 0px 15px 3px rgba(57,42,72,0.5);
	color: var(--main-bg);
  cursor: pointer;
`;

export const ProjectCardName = styled.h3`
	font-size: 16px;
  
`;

export const ProjectCardDescription = styled.div`
  font-style: italic;

`
