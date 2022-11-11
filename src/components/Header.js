import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const [showSideBar, setShowSideBar] = useState(false);
  const navigate = useNavigate();
  function showBar() {
    setShowSideBar(true);
  }
  function closeBar() {
    setShowSideBar(false);
  }
  return (
    <Container>
      <header>
        <div className="logo">
          <PageLink to="/">
            <img src="/images/logo.png" alt="logo" />
          </PageLink>
        </div>
        <nav>
          <PageLink to="/">home</PageLink>
          <PageLink to="/about">about us</PageLink>
          <PageLink to="/products">products</PageLink>
          <PageLink to="/contact">contact us</PageLink>
          <button onClick={() => navigate("/contact")} className="contact-us">
            Contact us
          </button>
        </nav>
        <MenuContainer onClick={showBar}>
          <img src="/images/menu.png" alt="menu" />
        </MenuContainer>
      </header>
      <SideBarContainer show={showSideBar}>
        <div show={showSideBar} className="bar-container" onClick={closeBar}>
          <div show={showSideBar} className="side-bar">
            <div className="close-part">
              <div onClick={closeBar}>
                <img src="/images/close.png" alt="close-icon" />
              </div>
            </div>
            <div className="pages">
              <h1>
                Pages <hr />
              </h1>
              <SidePageLink to="/">Home</SidePageLink>
              <SidePageLink to="/about">About us</SidePageLink>
              <SidePageLink to="/product">Products</SidePageLink>
              <SidePageLink to="/contact">Contact us</SidePageLink>
            </div>
            <div className="social-media">
              <h1>
                Follow us <hr />
              </h1>

              <div className="follow">
                <div>
                  <img src="/images/handles/facebook.png" alt="facebook" />
                </div>
                <div>
                  <img src="/images/handles/instagram.png" alt="instagram" />
                </div>
                <div>
                  <img src="/images/handles/linkedin.png" alt="linkedin" />
                </div>
                <div>
                  <img src="/images/handles/youtube.png" alt="youtube" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideBarContainer>
    </Container>
  );
}

export default Header;

const PageLink = styled(Link)`
  margin: 0px 10px;
  text-decoration: none;
  color: green;
  font-size: 21px;
  &:hover {
    cursor: pointer;
    color: black;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    // display: none;
  }
`;

const Container = styled.div`
  padding: 20px 0.5cm;
  border-bottom: solid 0.2px grey;
  background-color: rgb(248, 248, 248);

  header {
    display: flex;
    justify-content: space-between;
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5cm;
    margin-top: 30px;
  }
  .contact-us {
    padding: 7px 0.75cm;
    margin: 0 0px 0px 1cm;
    font-size: 20px;
    background-color: green;
    border: solid 2px transparent;
    border-radius: 20px;
    color: white;
    &:hover {
      color: black;
      cursor: pointer;
      border-color: black;
    }
  }
  .logo {
    margin-left: 1cm;
    width: 5cm;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    overflow-x: hidden;
    width: 100vw;
    padding: 0;
    margin: 0;
    nav {
      display: none;
    }
    .logo {
      margin: 0;
      padding: 0;
      width: 5cm;
      height: 2cm;
      img {
        width: 100%;
        height: 100%;
      }
    }
    header {
      display: flex;
      width: 100vw;
      overflow-y: hidden;
      justify-content: space-between;
      padding: 0.5cm;
    }
  }
`;

const MenuContainer = styled.div`
  display: none;
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5cm;
    margin-right: 1cm;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      background-color: grey;
    }
  }
`;

const SideBarContainer = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  .bar-container {
    position: fixed;
    display: ${(props) => (props.show ? "block" : "none")};
    z-index: 6;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    .side-bar {
      transform: ${(props) =>
        props.show ? "translateX(0)" : "translateX(100%)"};
      background-color: rgb(248, 248, 248);
      position: fixed;
      top: 0;
      right: 0;
      left: 20%;
      bottom: 0;
      z-index: 8;
      height: 100vh;
      display: flex;
      flex-direction: column;
      .close-part {
        display: flex;
        justify-content: flex-end;
        div {
          margin: 0.35cm 1cm 10px 0;
          width: 1cm;
          height: 1cm;
          padding: 0.25cm;
          border-radius: 5px;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
          }
          &:hover {
            background-color: grey;
          }
        }
      }
      .pages {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 20px;
        margin-top: 20px;
      }
      .social-media {
        display: flex;
        flex-direction: column;
        h1 {
          padding: 0.25cm 1cm;
        }
        .follow {
          display: flex;
          justify-content: space-between;
          margin: 0.25cm 0.5cm;
          div {
            width: 20%;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
`;

const SidePageLink = styled(Link)`
  text-decoration: none;
  color: green;
  font-size: 20px;
  margin: 5px 0;
`;
