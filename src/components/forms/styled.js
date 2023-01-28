import styled from 'styled-components';

export const FormWrapper = styled.div`
	position: relative;
	width: 100%;
	min-height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const FormTitle = styled.h1`
	/* position: absolute; */
	top: 30px;
	font-size: 24px;
	color: white;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 500px;
	min-height: 400px;
	padding: 20px 40px;
	gap: 10px;
`;

export const InputWrapper = styled.div`
position: relative;
	height: 60px;
	width: 75%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	gap: 3px;
	color: var(--mixed-dim-white);

	label {
		flex: 1;
		font-size: 13px;
		font-weight: 700;
	}

	input {
		width: 100%;
		flex: 3;
		padding: 10px;
		color: var(--mixed-dim-white);
		border: 1px solid var(--mixed-dim-white);
		border-radius: 10px;

		::placeholder {
			color: var(--mixed-dim-white);
			letter-spacing: 2px;
		}
	}
`;

export const DeleteButtonContainer = styled.div`
	position: absolute;
	top: 50%;
	right: 15px;
	cursor: pointer;
	z-index: 1000;
`;

export const SubmitBTN = styled.button`
	all: unset;
	width: 50%;
	height: 30px;
	font-size: 16px;
	background: transparent;
	border: none;
	position: relative;
	color: white;
	margin: 20px;
	cursor: pointer;
	z-index: 1;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;

	::after,
	::before {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: -99999;
		transition: all 0.4s;
	}

	::before {
		transform: translate(0%, 0%);
		width: 100%;
		height: 100%;
		background: var(--mixed-blue);
		border-radius: 10px;
	}

	::after {
		transform: translate(10px, 10px);
		width: 35px;
		height: 35px;
		background: var(--white40);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: 50px;
	}

	:hover::before {
		transform: translate(5%, 20%);
		width: 110%;
		height: 110%;
	}

	:hover::after {
		border-radius: 10px;
		transform: translate(0, 0);
		width: 100%;
		height: 100%;
	}

	:active::after {
		transition: 0s;
		transform: translate(0, 5%);
	}
`;

export const LinkTo = styled.p`
	position: absolute;
	bottom: 30px;
	left: 50%;
	transform: translateX(-70%);
	text-align: left;
	color: white;
  
	span {
		border-bottom: 1px solid white;
	}
`;
