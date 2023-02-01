import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 10vh;
  width: 200px;
  height: 80vh;
  background-color: green;

  >button {
    position: absolute;
    right: -20px;
    width: 20px;
    height: 20px;
    background-color: red;
  }
`