import styled from "styled-components";

export const GradientBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(115deg, #1e1f31, #2c2f49);
  transition: background 0.2s ease-in-out;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.15),
      transparent 50%
    );
    background-size: cover;
    opacity: 0.9;
    mix-blend-mode: screen;
    animation: auroraFlow 10s infinite alternate ease-in-out;
  }

  &:after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle at 30% 50%,
        rgba(255, 61, 99, 0.5),
        transparent 70%
      ),
      radial-gradient(
        circle at 70% 50%,
        rgba(61, 255, 193, 0.5),
        transparent 70%
      ),
      radial-gradient(
        circle at 50% 75%,
        rgba(135, 61, 255, 0.4),
        /* Elegant violet */ transparent 70%
      );
    mix-blend-mode: overlay;
    animation: auroraWave 12s infinite alternate ease-in-out,
      auroraPulse 6s infinite ease-in-out;
  }

  @keyframes auroraFlow {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    25% {
      transform: translate(-40%, -40%) scale(1.1);
    }
    50% {
      transform: translate(-50%, -60%) scale(1.3);
    }
    75% {
      transform: translate(-60%, -50%) scale(1.1);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes auroraWave {
    0% {
      transform: translate(0, 0) scale(1);
      filter: hue-rotate(0deg);
    }
    50% {
      transform: translate(20%, -20%) scale(1.4);
      filter: hue-rotate(60deg);
    }
    100% {
      transform: translate(-20%, 20%) scale(1);
      filter: hue-rotate(0deg);
    }
  }

  @keyframes auroraPulse {
    0%,
    100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1.2;
    }
  }
`;

export const StyledSection = styled.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  padding-top: 60px;

  h1 {
    font-size: 3.5rem;
    color: #c7d3fa;
    margin-bottom: 30px;
    animation: fadeIn 1s ease-out;
    font-family: "NTR";
    z-index: 100;
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    max-width: 800px;
    color: #a6bce3;
    z-index: 100;
  }

  @media (max-width: 480px) {
    padding-top: 0;
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
    .skills ul {
      justify-content: center;
    }
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
  font-family: "Nunito Sans", sans-serif;

  h1 {
    z-index: 100;
    font-size: 3.5rem;
    color: #c7d3fa;
    margin-bottom: 20px;
    animation: fadeIn 1s ease-out;
    font-family: "NTR";
  }

  p {
    font-size: 1.5rem;
    max-width: 700px;
    color: #a6bce3;
    margin: 5px 0;
    line-height: 1.6;
    animation: slideIn 1s ease-out;
    z-index: 100;
  }

  .favorites {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 800px;
    margin-top: 40px;
    animation: fadeIn 1.2s ease-out;
    z-index: 100;

    .favorite-item {
      background: rgba(255, 255, 255, 0.07);
      padding: 15px;
      border-radius: 12px;
      transition: transform 0.3s ease, background 0.3s ease;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
      z-index: 100;

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
    padding-top: 45px;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    padding-top: 55px;
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
    .favorite-item li {
      font-size: 0.9;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 60px;
    padding-bottom: 60px;
    padding-top: 60px;

    h1 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.3rem;
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
    color: #c7d3fa;
    margin-bottom: 10px;
    font-weight: normal;
    z-index: 100;
  }

  .name-text {
    color: #69dbb7;
    font-weight: 600;
  }

  .intro-text {
    font-size: 1.8rem;
    font-weight: 500;
    max-width: 700px;
    margin: 5px 0 15px;
    color: #a6bce3;
    opacity: 0;
    animation: fadeInUp 1.2s ease-out forwards;
    animation-delay: 0.3s;
  }

  .bio-text {
    font-size: 1.3rem;
    max-width: 600px;
    margin-top: 10px;
    color: #c8d4f4;
    font-family: "Nunito Sans", sans-serif;
    opacity: 0;
    animation: fadeInUp 1.2s ease-out forwards;
    animation-delay: 0.7s;
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
    font-family: "Nunito Sans", sans-serif;
    z-index: 100;

    p {
      font-size: 1.3rem;
      margin-bottom: 25px;
      /* letter-spacing: 1px; */
      -webkit-background-clip: text;
      color: #a6bce3;
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
      /* background: linear-gradient(135deg, #333f58, #2e3547); */
      padding: 10px 18px;
      border-radius: 25px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease, background 0.3s ease;
      cursor: pointer;
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.07);

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

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
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
  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    .intro-text {
      font-size: 1.5rem;
      max-width: 90%;
    }

    .bio-text {
      font-size: 1.2rem;
      max-width: 90%;
    }

    .skills {
      margin-top: 30px;
    }

    .skills p {
      font-size: 1.2rem;
    }

    li {
      font-size: 1rem;
      padding: 8px 14px;
    }
  }

  @media (max-width: 480px) {
    height: 70vh;
    padding-top: 40px;
    h1 {
      font-size: 2.5rem;
    }

    .intro-text {
      font-size: 1.3rem;
    }

    .bio-text {
      font-size: 1rem;
    }

    .skills p {
      font-size: 1rem;
    }
    .skills ul {
      justify-content: center;
    }

    li {
      font-size: 0.9rem;
      padding: 6px 12px;
    }
  }
`;

export const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 60px 20px;
  color: #d5def5;
  min-height: 30vh;
  margin-bottom: 60px;
  position: relative;
  z-index: 100;

  h1 {
    font-size: 3.5rem;
    color: #c7d3fa;
    margin-bottom: 20px;
    animation: fadeIn 1s ease-out;
    font-family: "NTR";
  }

  .content-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 100;

    width: 100%;
    max-width: 1200px;
    font-family: "Nunito Sans", sans-serif;
  }

  .content-box {
    padding-bottom: 25px;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 25%;
    position: relative;
    border-right: 2px solid rgba(255, 255, 255, 0.1);
  }

  .tab-button {
    position: relative;
    padding: 1rem 1.5rem;
    background: transparent;
    color: #a6bce3;
    border: none;
    font-size: 1.2rem;
    text-align: left;
    cursor: pointer;
    transition: color 0.7s ease, border-color 0.7s ease;

    border-right: 4px solid transparent;
    &.active {
      color: #69dbb7;
      border-right-color: #69dbb7;
      font-weight: bold;
      transition: color 0.7s ease-in-out, border-right-color 0.7s ease-in-out;
    }
  }

  .content {
    flex: 1;
    padding-left: 60px;
    position: relative;

    .content-heading {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      .work-ex-h2 {
        font-size: 1.5rem;
        color: #69dbb7;
        margin: 0;
        white-space: nowrap;
      }
      .work-ex-h3 {
        font-size: 1.3rem;
        color: #d5def5;
        margin: 0;
        white-space: nowrap;
      }
    }

    .time {
      font-size: 1.1rem;
      font-style: italic;
      color: #c8d4f4;
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .description {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      font-size: 1.2rem;
      line-height: 1.7;
      list-style-type: none;
      padding-left: 0;
      color: #a6bce3;
      li {
        position: relative;
        padding-left: 1.5rem;

        &::before {
          content: "•";
          color: #69dbb7;
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 1.5rem;
          line-height: 1;
        }
      }
    }
  }

  .tab-button {
    position: relative;
    overflow: hidden;

    .ripple {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background: rgba(105, 219, 183, 0.5);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(1.3);
      animation: rippleAnimation 0.9s ease-out;
    }
  }

  @keyframes rippleAnimation {
    from {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
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

  @media (min-width: 768px) {
    padding: 0 40px;

    h1 {
      font-size: 3rem;
    }

    .tab-button {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 60px;
    padding-top: 60px;

    h1 {
      font-size: 3.5rem;
    }

    .tab-button {
      font-size: 1.2rem;
    }

    .description {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 0;
    h1 {
      font-size: 2.5rem;
    }

    .content-wrapper {
      flex-direction: column;
      align-items: center;
      padding: 0 10px;
    }

    .sidebar {
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
      border-right: none;
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 20px;
    }

    .tab-button {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-right: none;
      border-bottom: 4px solid transparent;
      text-align: center;
    }

    .tab-button.active {
      color: #69dbb7;
      border-bottom-color: #69dbb7;
      font-weight: bold;
    }

    .content {
      padding-left: 0;
      text-align: center;

      .time {
        font-size: 0.9rem;
      }
    }

    .content .content-heading {
      justify-content: center;
      .work-ex-h2 {
        font-size: 1rem;
        white-space: nowrap;
      }

      .work-ex-h3 {
        font-size: 1rem;
        white-space: nowrap;
      }
    }
    .description {
      text-align: left;
    }
    .description li {
      font-size: 1rem;
      padding-left: 1rem;
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
    background: linear-gradient(115deg, #1e1f31, #2c2f49);
    z-index: 1000;
    box-sizing: border-box;
    background: #1e1f31;
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

  @media (max-width: 768px) {
    .navbar-container {
      padding: 20px;
    }

    .navbar-left {
      flex-direction: column;
      gap: 10px;
    }

    .navbar-left ul {
      flex-direction: column;
      gap: 10px;
    }

    .navbar-left a.name {
      font-size: 1.2rem;
    }

    .navbar-left a.pages {
      font-size: 1rem;
    }

    .navbar-right {
      margin-top: 10px;
    }

    .navbar-right a .icons {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 480px) {
    .navbar-container {
      background: transparent;
    }
  }
  .menu-icon {
    display: none;
    cursor: pointer;
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    background: linear-gradient(115deg, #1e1f31, #2c2f49);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.15),
        transparent 50%
      );
      background-size: cover;
      opacity: 0.9;
      mix-blend-mode: screen;
      animation: auroraFlow 10s infinite alternate ease-in-out;
      z-index: -1;
    }

    &:after {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
          circle at 30% 50%,
          rgba(255, 61, 99, 0.5),
          transparent 70%
        ),
        radial-gradient(
          circle at 70% 50%,
          rgba(61, 255, 193, 0.5),
          transparent 70%
        ),
        radial-gradient(
          circle at 50% 75%,
          rgba(135, 61, 255, 0.4),
          transparent 70%
        );
      mix-blend-mode: overlay;
      animation: auroraWave 12s infinite alternate ease-in-out,
        auroraPulse 6s infinite ease-in-out;
      z-index: -1;
    }

    @keyframes auroraFlow {
      0% {
        transform: translate(-50%, -50%) scale(1);
      }
      25% {
        transform: translate(-40%, -40%) scale(1.1);
      }
      50% {
        transform: translate(-50%, -60%) scale(1.3);
      }
      75% {
        transform: translate(-60%, -50%) scale(1.1);
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
      }
    }

    @keyframes auroraWave {
      0% {
        transform: translate(0, 0) scale(1);
        filter: hue-rotate(0deg);
      }
      50% {
        transform: translate(20%, -20%) scale(1.4);
        filter: hue-rotate(60deg);
      }
      100% {
        transform: translate(-20%, 20%) scale(1);
        filter: hue-rotate(0deg);
      }
    }

    @keyframes auroraPulse {
      0%,
      100% {
        opacity: 0.7;
      }
      50% {
        opacity: 1.2;
      }
    }
    .name {
      color: #5fc9f3;
    }
  }

  .sidebar-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 0.7;
  }

  .sidebar-right {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .sidebar-left a,
  .sidebar-right a {
    color: #d5def5;
    text-decoration: none;
    font-size: 1.2rem;
    margin: 15px 0;
    transition: color 0.3s;

    &:hover {
      color: #69dbb7;
      cursor: grab;
    }
  }
  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }

    .navbar-container {
      justify-content: space-between;
    }

    .navbar-left {
      display: none;
    }

    .navbar-right {
      display: none;
    }
  }
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 20px 0;
  color: #a6bce3;
  text-align: center;
  font-size: 0.8rem;
  bottom: 0;
  left: 0;

  a {
    text-decoration: none;
    color: #a4fbe3;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Reduced minimum width */
  gap: 20px;
  padding: 20px 0;
`;

export const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 20px;
  position: relative;
  text-align: left;
  transition: transform 0.3s ease, background 0.3s ease;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  text-align: center;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.12);
  }

  .github-link {
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    padding-bottom: 10px;
    gap: 10px;
    align-items: center;
  }

  h3 {
    font-size: 1.1rem; /* Slightly smaller font size */
    color: #69dbb7;
    margin-bottom: 10px;
  }

  p {
    color: #a6bce3;
    font-size: 0.9rem; /* Slightly smaller font size */
    margin-bottom: 10px; /* Reduced margin */
  }

  .tech-stack {
    font-size: 0.8rem;
    color: #5fc9f3;
    margin-top: 10px;
  }

  .icons {
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    gap: 10px;
    color: #69dbb7;

    a {
      color: inherit;
      font-size: 1.2rem;
      transition: color 0.3s;

      &:hover {
        color: #5fc9f3;
      }
    }
  }
`;
