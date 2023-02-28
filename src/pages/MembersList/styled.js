import styled from 'styled-components';

export const PageWrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	align-items: center;
	padding: 0 100px;
	gap: 10px;
`;

export const Members = styled.div`
	flex-grow: 8;
	margin-top: 10vh;
	min-height: 80vh;
	display: inline-grid;
	grid-template-columns: auto auto auto auto;
	align-items: start;
	gap: 20px;
`;

export const MemberInfo = styled.div`
	margin-top: 10vh;
	height: 80vh;
	width: 250px;
	padding: 25px;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: flex-start;
	background-color: white;
	border-radius: 5px;
	box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
		0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const MemberInfoPhoto = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	overflow: hidden;

	> img {
		height: 200px;
		width: auto;
		border-radius: 10px;
	}
`;

export const MemberActionsBox = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	height: 200px;
	position: absolute;
	right: 20px;
	bottom: 0;
`;

export const MemberName = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin: 0 auto;
	padding: 10px 0;
`;

export const MemberCompany = styled.div`
	height: 50px;
	width: 100%;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: blue;
	gap: 20px;
`;

export const MemberCompanyLogo = styled.div`
	height: 45px;
	width: 45px;
	background-color: green;
	img: {
		height: 45px;
		width: 45px;
	}
`;
export const MemberCompanyName = styled.div`
	height: 45px;
	flex-grow: 1;
	background-color: yellow;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const MemberProjects = styled.div`
	flex-grow: 1;
	background-color: purple;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
`;

export const ProjectCardContainer = styled.div`
	width: 100%;
	display: inline-grid;
	grid-template-columns: auto auto;
	background-color: white;
	flex-grow: 1;
	padding: 10px;
`;

export const CommonProjectCard = styled.div`
	width: 100px;
	height: 40px;
	/* background-color: var(--main-bg); */
	background-color: var(--mixed-modal-blue);

	border-radius: 5px;
	box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
		0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
