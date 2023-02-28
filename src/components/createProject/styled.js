import styled from 'styled-components';

export const CreateProjectForm = styled.form`
	position: relative;
	width: 500px;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	color: rgba(2, 27, 34, 1);
	font-size: 16px;
`;

export const InputBox = styled.div`
	width: 300px;
	position: relative;
	border: 1px solid rgba(2, 27, 34, 0.8);
	border-radius: 8px;
	padding: 8px 13px;
	color: black;

	label {
		position: absolute;
		padding: 0 5px;
		top: -13px;
		right: 20px;
		background: var(--white-pure);
	}

	input,
	textarea {
		width: 100%;
		background: transparent;
		border: none;
		::placeholder {
			color: var(--black70);
			font-size: 16px;
		}
	}

	&.img-box {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 40px;
		padding: 10px 20px;
	}
`;

export const LogoIMGPreviewBox = styled.div`
	position: absolute;
	bottom: 80px;
	right: 15px;
	height: 30px;
	width: auto;
	max-width: 40%;
	border-radius: 5px;
	overflow: hidden;
	z-index: 5000;

	img {
		width: 30px;
		height: 30px;
		object-fit: contain;
		overflow: hidden;
	}
`;

export const ButtonWrapper = styled.div`
	position: relative;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SubmitBTN = styled.button`
	width: 200px;
	height: 20px;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background-color: var(--submit-button);
	border-radius: 8px;
	color: white;
	font-size: 20px;
	letter-spacing: 2px;
`;
