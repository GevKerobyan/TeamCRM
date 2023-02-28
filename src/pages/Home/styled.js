import styled from 'styled-components';

export const HomePageContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
`;

export const LinkContainer = styled.div`
	position: relative;
	padding: 15px 35px;
	cursor: pointer;
  font-size: 20px;
  letter-spacing: 2px;
  color: white;
  transition: all 0.4s;
  z-index: 1;
	filter: grayscale(50%);

	::before {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		transition: all 0.4s;
    transform-origin: center;
    z-index: -1;
	}

	::before {
		transform: translate(10px, 10px);
		width: 0;
		height: 0;
		background: var(--white40);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: 50px;
	}

  :hover{
    filter: grayscale(0);
    transform: scale(1.02);
  }

	:hover::before {
		border-radius: 10px;
		transform: translate(0, 0);
		width: 100%;
		height: 100%;
		opacity: 0.6;
	}

	:active::before {
		transition: 0s;
		transform: translate(0, 5%);
	}
`;

export const HomeBG = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 500px;
	width: 500px;
	border-radius: 54% 46% 15% 85% / 57% 53% 47% 43%;
	background: linear-gradient(
		90deg,
		rgba(36, 0, 36, 0.5) 0%,
		rgba(221, 8, 166, 1) 100%,
		rgba(255, 0, 249, 1) 100%
	);
`;
