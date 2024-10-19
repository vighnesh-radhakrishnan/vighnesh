import styled from "styled-components";

export const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;

  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 20px;
    color: #d5def5;
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    max-width: 800px;
    color: #d5def5;
  }
`;

export const NavbarWrapper = styled.section`
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    width: 100%;
    background: #081f37;
    z-index: 1000;
    box-sizing: border-box;
  }

  .navbar-left {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .navbar-left a.name {
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    color: #5fc9f3;
  }

  .navbar-left ul {
    list-style-type: none;
    display: flex;
    gap: 15px;
    margin: 0;
    padding: 0;
  }

  .navbar-left a {
    color: #d5def5;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .navbar-left a.pages:hover {
    color: #a4fbe3;
  }

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .navbar-right a {
    color: #d5def5;
    text-decoration: none;
  }

  .navbar-right a .icons:hover {
    fill: #a4fbe3;
  }
`;

export const GradientBackground = styled.div`
  transition: background 0.2s ease-in-out;
  /* background: linear-gradient(
    109.6deg,
    rgb(43, 1, 91) 13.4%,
    rgb(122, 2, 54) 100.2%
  ); */
  background: #081f37;
`;
