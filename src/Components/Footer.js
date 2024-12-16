// src/Components/Footer.js
import React from "react";
import styled from "styled-components";
import { FooterWrapper } from "./Container";

const Footer = () => (
  <FooterWrapper>
    Built and designed by Vighnesh Radhakrishnan. All rights reserved. ©{" "}
    {new Date().getFullYear()}
  </FooterWrapper>
);

export default Footer;
