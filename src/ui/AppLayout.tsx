// import Heading from "./Heading.tsx";
import styled from "styled-components";
import {Outlet} from "react-router-dom";

const StyledAppLayout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



export default function AppLayout() {
	return (
		<StyledAppLayout>
      <Outlet />
    </StyledAppLayout>
	)
}
