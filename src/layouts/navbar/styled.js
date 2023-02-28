import styled from 'styled-components';

export const NavLogo = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1;
`;

export const NavLogoIMG = styled.div`
	width: 40px;
	height: 40px;
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
	height:40px;
	background: transparent;
	width: auto;
	min-width: 75px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 5px;
	cursor: pointer;
	filter: grayscale(50%);

	transition: all ease-in-out 150ms;
	/* transition: all 1s cubic-bezier(0.92, 0.08999999999999997, 1, 0.48) 150ms; */
	z-index: 1;
	font-size: 15px;

	svg {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:hover {
		filter: grayscale(0);
	}
`;

export const ProfileImageBox = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 5px;
	overflow: hidden;

	img {
		width: 30px;
		height: 30px;
		object-fit: cover;
	}
`;

export const NavDropdownLine = styled.div`
	width: 100%;
	border-bottom: 1px solid #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	filter: grayscale(50%);

	:hover {
		filter: grayscale(0);
	}
`;

export const SearchInputWrapper = styled.div`
	position: relative;
	width: auto;
	max-width: 300px;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	button {
		position: absolute;
		background: none;
		border: none;
		right: -5px;
		top: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: translateY(-50%);
		
		svg {
			fill: var(--sidebar-BG);
			font-size: 22px;
		}
	}
`;

export const SearchInput = styled.input`
	width: 100%;
	border-radius: 10px;
	background: whitesmoke;
	padding: 7px 25px;
	color: black;
`;
