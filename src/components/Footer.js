import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <Vision>
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <h1>Our Vision</h1>
        <p>
          SWIMS has a unique goal: to use technology to makes was disposal and
          collection easier and more sustainable.
        </p>
      </Vision>
      <Pages>
        <h1>Pages</h1>
        <PageLink to="/">Home</PageLink>
        <PageLink to="/about">About us</PageLink>
        <PageLink to="/product">Products</PageLink>
        <PageLink to="/contact">Contact us</PageLink>
      </Pages>
      <div className="social-media">
        <div>
          <img src="/images/handles/facebook.png" alt="facebook" />
        </div>
        <div>
          <img src="/images/handles/linkedin.png" alt="linkedin" />
        </div>
        <div>
          <img src="/images/handles/instagram.png" alt="instagram" />
        </div>
        <div>
          <img src="/images/handles/youtube.png" alt="youtube" />
        </div>
      </div>
      <LegalRights>
        <p>&copy;copyright SWIMS 2022</p>
      </LegalRights>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: rgb(248, 248, 248);
  display: flex;
  padding: 1cm 2cm;
  border-top: solid 1px black;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-wrap: wrap;
    padding: 1cm;
  }
  .social-media {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10%;
    margin-top: 2cm;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 100%;
      flex-wrap: wrap;
      flex-direction: row;
      margin-top: 0.5cm;
    }
    div {
      width: 1cm;
      height: 1cm;
      margin-bottom: 10px;
      @media (min-width: 320px) and (max-width: 480px) {
        margin: 0 0.25cm;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
const Vision = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
  p {
    font-size: 20px;
    margin-left: 0.5cm;
    @media (min-width: 320px) and (max-width: 480px) {
      margin-left: 0;
      width: 80%;
    }
  }
  h1 {
    font-size: 25px;
    margin-left: 0.5cm;
    @media (min-width: 320px) and (max-width: 480px) {
      margin-left: 0;
    }
  }
  .logo {
    width: 80%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
const Pages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  margin-top: 2cm;
  margin-left: 2cm;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
const PageLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin-bottom: 10px;
  &:hover {
    color: green;
  }
`;

const LegalRights = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
