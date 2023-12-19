// import Heading from "./Heading.tsx";
import styled from "styled-components";
import {Outlet} from "react-router-dom";

const StyledAppLayout = styled.div`
  display: flex;
  overflow: hidden;
  min-height: 100vh;
`;

const Main = styled.main`
  position: relative;
  width: 100vw;
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
