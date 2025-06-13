import styled from "styled-components";

const MobileNav = styled.nav`
  display: none;
  font-size: 18px;

  @media (max-width: 768px) {
    #nav-items {
      padding: 0 20px;
      width: 100%;
      height: calc(100vh - 72px);
      position: fixed;
      top: 0;
      left: 0;
      background-color: ${(props) => props.theme.colors["background"]};
      transition: all 0.5s ease-in-out;
      z-index: 999;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 72px;
    position: relative;

    .nav-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 72px;
      width: 100%;
    }

    .nav-close {
      transform: translateY(-100%);
      pointer-events: none;
    }

    .nav-open {
      transform: translateY(0);
      pointer-events: all;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    ul li {
      width: 100%;
    }

    ul li a {
      width: 100%;
      display: inline-block;
    }

    button {
      margin-bottom: 16px;
      width: 100%;
    }
  }
`;

export default MobileNav;
