import styled from "styled-components";
export interface NavItem {
  namespace: string;
  path: string;
}
const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  background-color: #f8f9fa;
  padding: 1rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #007bff;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar({ navItems }: { navItems: NavItem[] }) {
  return (
    <StyledNav>
      {navItems.map((item, index) => (
        <StyledLink key={index} href={item.path}>
          {item.namespace}
        </StyledLink>
      ))}
    </StyledNav>
  );
}