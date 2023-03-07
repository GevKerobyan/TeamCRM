import styled from 'styled-components';

export const DraggabaleBoundsBox = styled.div`
	position: relative;
	width: 100vw;
	padding-left:250px;
`;

export const ChatMiniBoxWrapper = styled.div`
	position: fixed;
	bottom: 1px;
	right: 100px;
	width: 250px;
	transition: all 1s linear;
	height: ${(props) => (!props.isMinimized ? '400px' : '40px')};
	border: 2px solid black;
	border-radius: 15px 15px 0 0;
	background: var(--message-content-bg);
	overflow: hidden;

	* {
		color: var(--message-header-name);
	}
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
	background: var(--message-content-bg);
	gap: 15px;
	overflow: auto;
`;

export const SingleMessage = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: ${(props) => (!props.contact ? 'flex-start' : 'flex-end')};
	gap: 5px;

	p {
		hyphens: auto;
		width: 60%;
		background: ${(props) =>
			!props.contact
				? 'var(--single-contact-message-container)'
				: 'var(--single-own-message-container)'};
		border-radius: 8px;
		${(props) =>
			!props.contact
				? 'border-bottom-left-radius: 0'
				: 'border-top-right-radius: 0'};
		padding: 7px;
		font-size: 12px;
	}
`;

export const ChatMiniBoxFooter = styled.div`
	position: absolute;
	width: 100%;
	min-height: 20%;
	max-height: 25%;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const ChatInput = styled.form`
	display: ${(props) => (!props.isMinimized ? 'flex' : 'none')};
	justify-content: center;
	padding: 0 10px;
	position: relative;

	div {
		display: ${(props) => (!props.isMinimized ? 'flex' : 'none')};
		flex-direction: column;
		width: 100%;
		justify-content: center;
		line-height: 16px;
		max-height: 45px;
		font-size: 12px;
		padding: 7px 23px 7px 7px;
		overflow: auto;
		color: var(--message-header-name);
		border-radius: 10px;
		overflow-y: auto;
		background: var(--single-contact-message-container);
		-ms-overflow-style: none;
		scrollbar-width: none;

		:focus {
			border: none;
			outline: none;
		}

		::-webkit-scrollbar {
			display: none;
		}
	}

	svg {
		top: 50%;
		transform: translateY(-50%);
		right: 13px;
		cursor: pointer;
	}
`;

export const InputButtonsRow = styled.div`
	padding: 0 10px;
	display: ${(props) => (!props.isMinimized ? 'flex' : 'none')};
	align-items: center;
	svg {
		font-size: 16px;
		cursor: pointer;
	}
`;

export const EmojiPickerBox = styled.div`
	position: absolute;
`;
