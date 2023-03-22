import styled from 'styled-components';

export const UserPageLayout = styled.section`
	width: 100%;
	min-width: 60vw;
	/* height: 100vh; */
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const UserPageCompanySection = styled.div`
	padding: 10px 30px;
	width: 100%;
	gap: 15px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const UserPageCompanyLogoWrapper = styled.div`
	width: 75px;
	height: 75px;
	border-radius: 8px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-grow: 1;

	img {
		width: 50px;
		height: 50px;
	}
`;

export const UserPageCompanyInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	flex-grow: 8;
`;
export const UserCompanyInfoLine = styled.p`
	border-bottom: 1px solid var(--single-own-message-container);
	width: 100%;
	padding: 5px;
	font-size: 12px;

	:hover {
		background: var(--company-info-hover);
		backdrop-filter: blur(10px);
	}
`;

export const UserPageProjectSection = styled.div`
	padding: 20px 30px;
	width: 100%;
	gap: 15px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 15px;
`;
