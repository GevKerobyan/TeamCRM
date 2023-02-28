import styled from 'styled-components';

export const ChatMiniBoxWrapper = styled.div`
	position: fixed;
	bottom: 10px;
	right: 100px;
	width: 250px;
	height: 400px;
	border: 2px solid black;
	border-radius: 15px 15px 0 0;
	background: whitesmoke;
`;

export const ChatMiniBoxContent = styled.div`
	padding: 10px 15px;
	font-size: 14px;
	line-height: 20px;
	word-spacing: 2px;
	letter-spacing: 1.2px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	height: 67%;
	background: white;
`;

export const SingleMessage = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	gap: 5px;
	p {
		hyphens: auto;
		width: 85%;
		background: var(--black15);
		border-radius: 8px;
		padding: 7px;
		font-size: 12px;
	}
`;

export const InputButtonsRow = styled.div`
	height: 30px;
	padding: 0 10px;
	background: white;
	display: flex;
	align-items: center;
	justify-content: flex-start;
  gap: 10px;
  svg {
    font-size: 16px;
    cursor: pointer
  }
`;
