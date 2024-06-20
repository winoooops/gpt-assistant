// import Heading from "./Heading.tsx";
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import Navbar, {NavItem} from "./Navbar.tsx";

const StyledAppLayout = styled.div`
  overflow: hidden;
  min-height: 100vh;
  z-index: var(--root-z-index);
`;

const Main = styled.main`
  //position: relative;
`;

const navItems: NavItem[] = [
  { namespace: "Chat", path: "/chat"},
  { namespace: "Crypto", path: "/crypto"}
]


export default function AppLayout() {
	return (
    <StyledAppLayout>
      <Main>
        <Navbar navItems={navItems}/>
        <Outlet />
      </Main>
    </StyledAppLayout>
	);
}
