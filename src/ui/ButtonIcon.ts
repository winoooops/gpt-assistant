import styled from "styled-components";

const ButtonIcon = styled.button<{
  $as?: string,
  size?: string,
  shape?: "rect" | "square",
  translucent?: boolean
}>`
   background-color: ${props =>
    props.$as === "primary" ? 
      props.translucent ? "var(--color-green-600-translucent)" : "var(--color-green-600)" : 
      props.translucent ? "var(--color-grey-500-translucent)" : "var(--color-grey-100)"
  };
  padding: 0.6rem;
  border-radius: ${props => props.shape === "square" ? "var(--border-radius-rd)": "var(--border-radius-sm)"};
  cursor: pointer;
  height: ${props => props.size ? "var(--button-size-" + props.size + ")"  : "var(--button-size-md)" };
  width: ${props => props.size ? "var(--button-size-" + props.size + ")"  : "var(--button-size-md)" };
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  & svg {
    flex-shrink: 0;
    width: ${props => props.size ? "var(--svg-size-" + props.size + ")"  : "var(--svg-size-md)" };
    height: ${props => props.size ? "var(--svg-size-" + props.size + ")"  : "var(--svg-size-md)" }; 
    color: ${props => props.$as === "primary" ? "var(--text-white-color)" : "var(--text-light-color)"};
  }
`;


export default ButtonIcon;
