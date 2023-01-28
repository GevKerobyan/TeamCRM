import styled from "styled-components";

export const NavDropdown = styled.div`
	position: absolute;
	min-width: 150px;
	top: 80%;
	padding: 25px 5px;
	background-color: rgba(8, 9, 22, 0.9);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 10px;
	color: var(--mixed-dim-white);
`;

export const NavDropdownLine = styled.div`
width: 100%;
padding: 10px 20px;
border-bottom: 1px solid #fff;
display: flex;
justify-content: space-between;
align-items: center;
/* gap: 10px; */

:hover {
  background-color: rgba(8, 9, 22, 1);
}
`;