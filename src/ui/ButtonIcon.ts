import styled from "styled-components";

const ButtonIcon = styled.button<{
  $as: string,
  $size?: "xs" | "sm" | "md" | "lg" | "full",
  $shape?: "rect" | "square",
}>`);
   background-color: ${props =>
     props.$as?.includes("translucent") ?      
       "var(--color-grey-700)":      
     props.$as?.includes("primary") ? 
       "var(--color-green-500)" :
       props.$as?.includes("secondary") ?
         "var(--color-grey-800)" :        
         props.$as?.includes("danger") ? 
           "var(--color-red-700)" :        
           props.$as?.includes("dark") ?       
           "var(--color-grey-900)" :        
           ""      
   };
  padding: 0.6rem;
  border-radius: ${props => props.$shape === "square" ? "var(--border-radius-rd)": "var(--border-radius-sm)"};
  cursor: pointer;
  height: ${
    props => props.$size ?
      (props.$size === "full" ? "100%" : "var(--button-size-" + props.$size + ")" ) : 
      "" 
  };
  width: ${
    props => props.$size ?
      (props.$size === "full" ? "100%" : "var(--button-size-" + props.$size + ")" ) : 
      "" 
  };
  color: ${
    props => 
      props.$as?.includes("primary") ? 
        "var(--color-green-500)" :
        props.$as?.includes("secondary") ?
          "var(--color-grey-700)" :
          props.$as?.includes("danger") ?
            "var(--color-red-700)"  :
             props.$as.includes("dark") ?     
            "var(--color-grey-400)" :         
              ""        
  };
  display: flex;
  align-items: center;
  gap: 0.4rem;
  justify-content: ${props => props.$size === "full" ? "flex-start" : "center"};
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background: ${props => props.$as === 'primary' ? "var(--color-green-800)" : "var(--color-grey-800)"};
  } 
  
 
  & svg {
    flex-shrink: 0;
    width: ${props => props.$size ? "var(--svg-size-" + props.$size + ")"  : "var(--svg-size-md)" };
    height: ${props => props.$size ? "var(--svg-size-" + props.$size + ")"  : "var(--svg-size-md)" }; 
    color: ${props => props.$as === "primary" ? "var(--text-white-color)" : "var(--text-light-color)"};
  }
`;


export default ButtonIcon;
