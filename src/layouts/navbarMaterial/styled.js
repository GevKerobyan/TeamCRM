import styled from "styled-components";


export const NavLogo = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1;
`;

export const NavLogoIMG = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 78% 43% 57% 22%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	background: linear-gradient(
		90deg,
		rgba(186, 77, 184, 1) 0%,
		rgba(92, 20, 90, 1) 50%,
		rgba(66, 4, 63, 1) 100%
	);

	h1 {
		font-weight: 700;
		font-size: 13px;
	}
`;

export const NavbarLink = styled.div`
	position: relative;
	height: 100%;
	background: transparent;
	width: auto;
	min-width: 75px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 5px;
	cursor: pointer;
	transition: all ease-in-out 150ms;
	/* transition: all 1s cubic-bezier(0.92, 0.08999999999999997, 1, 0.48) 150ms; */
	z-index: 1;
	font-size: 15px;

	>svg {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:hover {
		filter: brightness(200%);
		background: rgba(240, 242, 245, 0.1);
		/* background-blend-mode: luminosity; */
	}
`;

export const ProfileImageBox = styled.div`
	width: 25px;
	height: 25px;
	border-radius:  5px;
	overflow: hidden;

	img {
		width: 25px;
		height: 25px;
	}
`;

export const NavDropdownLine = styled.div`
	width: 100%;
	/* padding: 10px 20px; */
	border-bottom: 1px solid #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;

	:hover {
		filter: brightness(200%);
	}
`;