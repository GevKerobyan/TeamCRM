import styled from 'styled-components';

export const CardWrapper = styled.div`
	width: 250px;
	height: 75px;
	padding: 5px 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: white;
	border-radius: 5px;
	box-shadow: 2px 2px 5px rgba(128, 0, 128, 0.1);
	transition: all 0.2s linear;

	&:hover {
		box-shadow: 2px 2px 5px rgba(128, 0, 128, 0.3);
	}
`;

export const CardIMGWrapper = styled.div`
	width: 50px;
	height: 50px;
	overflow: hidden;

	img {
		width: 50px;
		height: 50px;
		width: fit-content;
		margin: 0 auto;
		border-radius: 5px;
	}
`;

export const CardTextWrapper = styled.div`
	flex-grow: 1;
	height: 75px;
	padding: 0 15px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	> p {
		font-size: 12px;
		margin: 3px 0;
	}
`;

export const PopupButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 15px;
	gap: 10px;
	border-radius: 5px;
	box-shadow: 2px 2px 5px rgba(128, 0, 128, 0.1);
`;

export const PopupButton = styled.div`
	width: 100%;
	padding: 5px 10px;
	background: none;
	text-align: center;
	border-radius: 5px;
	background: var(--popup-btn);
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	span {
		font-size: 10px;
		color: black

	};
	&:hover {
		background: var(--popup-btn-hover);
		color: black
	}
`;
