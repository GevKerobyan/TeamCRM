import styled from 'styled-components';

export const ModalWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* width: 50vw; */
	/* height: 50vh; */
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	/* padding: 100px; */
	border: 1px solid black;
`;

export const ModalBG = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(20, 20, 20, 0.3);
`;
