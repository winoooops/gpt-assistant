import React, {createContext, useContext, useState} from "react";
import ButtonIcon from "./ButtonIcon.ts";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {useOutsideClick} from "../hooks/useOutsideClick.ts";

const StyledList = styled.ul<{$right: number, $top: number}>`
  position: fixed;
  background-color: var(--color-grey-800);
  border: 1px solid var(--color-grey-600);
  border-radius: var(--border-radius-md);
  right: ${props => props.$right}px;
  top: ${props => props.$top}px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  z-index: var(--overlay-z-index);
  padding: 0.6rem;
`

const MenuContext = createContext({});

function Button({ children, name }: { children: React.ReactNode, name: string }) {
  // @ts-expect-error: default value should be set with setShowMenu
  const { setPosition, openName, closeMenu, openMenu } = useContext(MenuContext);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: window.innerWidth + rect.width - rect.x * 2,
      y: rect.y - rect.height / 2
    })

    if(openName === name) {
      closeMenu();
    } else {
      openMenu(name);
    }
  }

  return <ButtonIcon $size="sm" $as="transparent" onClick={handleClick}>{children}</ButtonIcon>
}

function List({ children, name }: { children: React.ReactNode, name: string }) {
  // @ts-expect-error: default value should be set with setShowMenu
  const { openName, position, closeMenu } = useContext(MenuContext);
  const { x, y } = position;
  const ref = useOutsideClick(closeMenu, true);

  if(openName !== name) return null;

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

Menu.Button = Button;
Menu.List = List;

export default Menu;