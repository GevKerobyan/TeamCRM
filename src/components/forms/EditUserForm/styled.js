import styled from "styled-components";

export const EditFormWrapper = styled.div`
	position: absolute;
	margin: 0 auto;
	width: 600px;
	height: 500px;
`

export const EditBG = styled.div`
position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 550px;
	width: 700px;
	z-index: -1;
	background: linear-gradient(
		90deg,
		rgba(36, 0, 36, 0.5) 0%,
		rgba(221, 8, 166, 1) 100%,
		rgba(255, 0, 249, 1) 100%
	);
	border-radius: 39% 61% 17% 83% / 61% 42% 58% 39%   ;
  `