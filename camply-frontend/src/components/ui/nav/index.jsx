import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 64px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  button {
    margin-left: 16px;
  }

  ul {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 32px;
  }

  ul li:hover {
    transition: all ease-in-out 0.1s;
  }

  ul li:hover {
    transform: translateY(-2px);
  }

  a {
    text-decoration: none;
  }

  .menu-button {
    display: flex;
  }

  .toggle-menu {
    display: none;
  }

  @media (max-width: 992px) {
    ul.large-menu {
      display: none;
    }

    .toggle-menu {
      display: block;
      cursor: pointer;
    }

    .toggle-menu #nav-itemss {
      position: absolute;
      align-items: start;
      top: 4.5rem;
      left: 0;
      width: 100%;
      height: auto;
      transition: all ease-in-out 0.2s;
      padding: 16px 64px;
      z-index: 999;
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    #nav-itemss.nav-open {
      transform: translateX(0);
    }

    #nav-itemss.nav-close {
      transform: translateX(-200%);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Nav;
