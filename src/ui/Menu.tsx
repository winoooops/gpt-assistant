import React, {createContext, useContext, useState} from "react";
import ButtonIcon from "./ButtonIcon.ts";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {useOutsideClick} from "../hooks/useOutsideClick.ts";

const StyledList = styled.ul<{$right: number, $top: number}>`
  position: fixed;
  background-color: var(--color-grey-700);
  border: 1px solid var(--color-grey-600);
  border-radius: var(--border-radius-md);
  right: ${props => props.$right}px;
  top: ${props => props.$top}px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;
  z-index: var(--overlay-z-index);
  padding: 0.6rem;
`

const StyledButton = styled.button<{ dark?: boolean }>`
  background-color: ${props => props.dark ? "var(--color-grey-900)" : "var(--color-grey-400)"};
  margin: 0;
  padding-left: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  &:hover {
    background-color: var(--color-grey-800); 
  }
  
  &:active {
    outline: none;  
  }
`;


const MenuContext = createContext({});

function Toggle({ children, name, isRow }: { children: React.ReactNode, name: string | undefined, isRow?: boolean }) {
  // @ts-expect-error: default value should be set with setShowMenu
  const { setPosition, openName, closeMenu, openMenu } = useContext(MenuContext);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    if(isRow) {
      setPosition({
        // x: window.innerWidth - rect.width - rect.x,
        x: window.innerWidth - rect.left - rect.width,
        // y: rect.y + rect.height
        y: rect.top + rect.height
      });
    } else {
      setPosition({
        // x: window.innerWidth - rect.x * 2,
        // y: rect.y - rect.height / 2
        x: window.innerWidth - rect.right - rect.width * 2 ,
        y: rect.bottom - rect.height / 2,
      });
    }


    if(openName === name) {
      closeMenu();
    } else {
      openMenu(name);
    }
  }

  if(isRow) return <StyledButton onClick={handleClick} dark={true}>{children}</StyledButton>

  return <ButtonIcon $size="sm" $as="transparent" onClick={handleClick}>{children}</ButtonIcon>
}


function List({ children, name }: { children: React.ReactNode, name: string | undefined }) {
  // @ts-expect-error: default value should be set with setShowMenu
  const { openName, position, closeMenu } = useContext(MenuContext);
  const { x, y } = position;
  const ref = useOutsideClick(closeMenu, true);

  if(openName !== name || !name) return null;

  return createPortal(
    // @ts-expect-error: ref should be working
    <StyledList $right={x} $top={y} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}


function Menu({children}: {children: React.ReactNode}) {
  const [openName, setOpenName] = useState("");
  const [position, setPosition] = useState({x: 0, y:0});
  const { x, y } = position;

  function openMenu(name: string) {
    setOpenName(name);
    console.log(`opening menu at [${x}, ${y}]...`);
  }

  function closeMenu() {
    setOpenName("");
    console.log(`closing menu at [${x}, ${y}]...`);
  }

  return (
    <MenuContext.Provider value={{
      position,
      setPosition,
      openName,
      openMenu,
      closeMenu,
    }}>
      {children}
    </MenuContext.Provider>
  )
}

Menu.Toggle = Toggle;
Menu.List = List;

export default Menu;