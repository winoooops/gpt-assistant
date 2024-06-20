import Transactions from "./Transactions.tsx";
import Heading from "../../../ui/Heading.tsx";
import styled from "styled-components";
import {getCurrency} from "../../../services/apiCurrency.ts";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.8rem;
  width: 100%;  
`;


export default function Portfolio() {
  getCurrency();

  return <StyledContainer>
    <Heading>Total Asset: </Heading>
    <Transactions/>
  </StyledContainer>
}