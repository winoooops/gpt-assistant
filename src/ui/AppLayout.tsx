// import Heading from "./Heading.tsx";
import styled from "styled-components";
import {Outlet} from "react-router-dom";

const StyledAppLayout = styled.div`
  overflow: hidden;
  min-height: 100vh;
  z-index: var(--root-z-index);
`;

const Main = styled.main`
  //position: relative;
`;



export default function AppLayout() {
	return (
		<StyledAppLayout>
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
	)
}
