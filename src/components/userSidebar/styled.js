import styled from 'styled-components';

export const SidebarWrapper = styled.div`
	position: absolute;
	width: 200px;
	height: 50vh;
	padding: 25px 15px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	color: var(--main-bg);
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	background-color: rgba(57, 42, 72, 1);
	box-shadow: 20px 0px 100px 16px rgba(57, 42, 72, 0.5);
	transition: all 1s;
	left: -175px;
	font-size: 12px;
	z-index: 999;
	:hover {
		left: 0;
	}
`;

export const SideImgPreview = styled.div`
	position: relative;
	width: 150px;
	height: 150px;
	overflow: hidden;
	background-color: var(--grey-label);
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;

	> img {
		width: 150px;
		height: 150px;
	}

	> svg {
	}
`;

export const DeleteButtonContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	z-index: 1000;
`;

export const SideInfo = styled.div`
	width: 100%;
	/* background-color: yellow; */
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 25px;
`;

export const SideInfoLine = styled.div`
	width: 100%;
	height: 35px;
	padding: 7px 5px;
	/* background-color: red; */
	border-bottom: 1px solid white;
	display: flex;
	align-items: end;
	justify-content: flex-start;
`;
