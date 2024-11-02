import styled from "styled-components";

export const StyledSection = styled.section`
  min-height: 50vh;
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

export const AboutWrapper = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  text-align: center;
  font-family: "Helvetica Neue", sans-serif;

  h1 {
    font-size: 3.5rem;
    color: #f0f4ff;
    margin-bottom: 20px;
    animation: fadeIn 1s ease-out;
    font-family: "NTR";
  }

  p {
    font-size: 1.5rem;
    max-width: 700px;
    color: #c8d4f4;
    margin: 5px 0;
    line-height: 1.6;
    animation: slideIn 1s ease-out;
  }

  .favorites {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 800px;
    margin-top: 40px;
    animation: fadeIn 1.2s ease-out;

    .favorite-item {
      background: rgba(255, 255, 255, 0.07);
      padding: 15px;
      border-radius: 12px;
      transition: transform 0.3s ease, background 0.3s ease;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

      &:hover {
        transform: translateY(-8px);
        background: rgba(255, 255, 255, 0.15);
      }

      h3 {
        font-size: 1.2rem;
        color: #69dbb7;
        margin-bottom: 8px;
        font-weight: 600;
      }

      p,
      ul {
        font-size: 1rem;
        color: #c8d4f4;
        margin: 0;
      }
      p:hover {
        color: #5fc9f3;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        margin-bottom: 5px;
        /* display: flex; */
        align-items: center;

        /* &::before {
          content: "•";
          color: #69dbb7;
          margin-right: 8px;
          font-size: 1.2rem;
        } */

        &:hover {
          color: #5fc9f3;
        }
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    padding: 0 40px;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 60px;

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

export const HomeWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  font-family: "NTR";

  h1 {
    font-size: 4.5rem;
    line-height: 1.2;
    color: #f0f4ff;
    margin-bottom: 10px;
  }

  .name-text {
    color: #69dbb7;
  }

  .intro-text {
    font-size: 1.8rem;
    font-weight: 500;
    max-width: 700px;
    margin: 5px 0 15px;
    color: #a6bce3;
  }

  .bio-text {
    font-size: 1.4rem;
    max-width: 600px;
    margin-top: 10px;
    color: #c8d4f4;
    font-family: "Helvetica Neue", sans-serif;
  }

  .cursor {
    animation: blink 1s steps(2) infinite;
    color: #69dbb7;
  }

  .skills {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeIn 1.2s ease-out;

    p {
      font-size: 1.4rem;
      font-weight: bold;
      color: #69dbb7;
      margin-bottom: 25px;
      letter-spacing: 1px;
      /* text-transform: uppercase; */
      background: linear-gradient(135deg, #5fc9f3, #69dbb7);
      -webkit-background-clip: text;
      color: transparent;
    }

    ul {
      display: flex;
      gap: 25px;
      list-style: none;
      padding: 0;
      margin: 0;
      flex-wrap: wrap;
    }

    li {
      font-size: 1.1rem;
      color: #69dbb7;
      background: linear-gradient(135deg, #333f58, #2e3547);
      padding: 10px 18px;
      border-radius: 25px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease, background 0.3s ease;
      cursor: pointer;
      display: flex;
      align-items: center;

      &:hover {
        transform: translateY(-5px) scale(1.05);
        background: linear-gradient(135deg, #5fc9f3, #69dbb7);
        color: #fff;
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    50.1%,
    100% {
      opacity: 0;
    }
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

  .navbar-left a.pages.active {
    color: #a4fbe3;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;
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

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 20px 0;
  color: #d5def5;
  text-align: center;
  font-size: 0.8rem;
  bottom: 0;
  left: 0;

  a {
    text-decoration: none;
    color: #a4fbe3;
    font-weight: bold;
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
