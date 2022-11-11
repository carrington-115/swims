import React from "react";
import HeaderIntro from "../components/HeaderIntro";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { Flip } from "react-reveal";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderIntro id="top" />
      <div className="problem">
        <div className="text">
          <p>
            &nbsp; &nbsp; Waste management is a problem in Africa today.
            Residential waste collection is one of the biggest challenge in
            Africa today. Out of 100% of Africa's annually produced waste, 80%
            is dumped openly. The waste sector contributes greatly to climate
            change, and we are already at the verge of topping 1.5 degrees
            Centigrades. Residential waste collection seems impossible is the
            most difficult part for waste collectors to maintain. Despite the
            efforst waste collectors make, they are not still able to fulfil
            their daily collection plans. They spend more time, energy, and
            resources, but it still seems impossible for them to collect all the
            residential waste. As result dustbins get full and overflow which
            becomes dangerous to the health and the climate
          </p>
          <button onClick={() => navigate("/about")}>Learn More</button>
        </div>
        <div className="image">
          <img src="/images/problem.jpg" alt="problem" />
        </div>
      </div>
      <div className="solution">
        <Fade left>
          <div className="image">
            <img src="/images/solution.png" alt="solution" />
          </div>
        </Fade>
        <div className="text">
          <p>
            &nbsp; &nbsp; SWIMS is the accronym for Smart Waste Intelligent
            Monitoring System. it is a hardware-software solution with a goal of
            making disposing and collection of waste more easy while doing it
            properly and sustainably. The hardware is a sensor that is
            implantable in dustbins with the capability of monitoring the level
            of waste with the location of the dustbin. Through software, SWIMS
            Platform, users can monitor the level of waste in the dustbins of
            their clients from any location. The software comes so many features
            that helps users dispose waste and waste collectors collect the
            waste in an environmental friendly and comfortable manner.
          </p>
          <div className="btns">
            <button onClick={() => navigate("/contact")} className="contact">
              Contact us
            </button>
            <button onClick={() => navigate("/about")} className="learn">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="sensor">
        <div className="text">
          <p>
            &nbsp; &nbsp;The swimsense Version 1.0. This is the first Version of
            the dustbin sensor with the capabilities of monitoring dustbins
            level and the location of the dustbin.
          </p>
          <div className="btns">
            <button onClick={() => navigate("/about")} className="learn">
              Learn More
            </button>
          </div>
        </div>
        <div className="images">
          <Flip top>
            <div className="first-line">
              <img src="/images/sensor/design1.jpg" alt="sensor frontview" />
            </div>
          </Flip>
          <div className="second-line">
            <Flip top>
              <div>
                <img src="/images/sensor/design2.jpg" alt="sensor sideview" />
              </div>
            </Flip>
            <Flip top>
              <div>
                <img src="/images/sensor/design3.jpg" alt="sensor backview" />
              </div>
            </Flip>
          </div>
        </div>
      </div>
      <div className="close">
        <div className="btns">
          <button onClick={() => navigate("/contact")} className="contact">
            Contact us
          </button>
          <a href="#top" className="join">
            Join us
          </a>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .problem {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
      flex-wrap: wrap;
      .text {
        width: 100%;
      }
    }
    .text {
      display: flex;
      padding: 1cm;
      text-align: justify;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 50%;
      font-size: 20px;
      p {
        margin-bottom: 0.5cm;
      }
      @media (min-width: 320px) and (max-width: 480px) {
        padding: 1cm;
        width: 100%;
      }
      button {
        padding: 5px 20px;
        background-color: transparent;
        font-size: 25px;
        color: green;
        border: 2px solid green;
        border-radius: 10px;
        &:hover {
          color: white;
          border-color: transparent;
          background-color: green;
        }
      }
    }
    .image {
      width: 50%;
      @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        padding: 1cm;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .solution {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1cm 2cm;
    background-color: green;
    @media (min-width: 320px) and (max-width: 480px) {
      flex-wrap: wrap;
      padding: 1cm;
    }
    .image {
      width: 50%;
      margin-right: 1cm;
      @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        margin-right: 0;
        padding: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 50%;
      font-size: 22px;
      text-align: justify;
      color: white;
      @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        font-size: 18px;
      }
      .btns {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.5cm;
        button {
          padding: 5px 20px;
          font-size: 20px;
        }
        .learn {
          background-color: white;
          color: green;
          border: 2px solid transparent;
          &:hover {
            border-color: black;
            color: black;
          }
        }
        .contact {
          background-color: transparent;
          color: white;
          margin-right: 30px;
          border: 2px solid white;
          &:hover {
            color: green;
            background-color: white;
            border-color: transparent;
          }
        }
      }
    }
  }
  .sensor {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2cm;
    @media (min-width: 320px) and (max-width: 480px) {
      flex-wrap: wrap;
      padding: 1cm;
    }
    .text {
      width: 50%;
      @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
      }
      p {
        font-size: 25px;
        margin-right: 1cm;
        text-align: justify;
        @media (min-width: 320px) and (max-width: 480px) {
          font-size: 20px;
          margin-right: 0;
        }
      }
    }
    .images {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
      }
      .first-line {
        width: 12cm;
        @media (min-width: 320px) and (max-width: 480px) {
          width: 100%;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .second-line {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12cm;
        @media (min-width: 320px) and (max-width: 480px) {
          width: 100%;
        }
        div {
          margin-right: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .btns {
      display: flex;
      justify-content: center;
      margin-top: 0.5cm;
      button {
        padding: 5px 20px;
        font-size: 22px;
      }
      .learn {
        background-color: green;
        color: white;
        border: 2px solid transparent;
        cursor: pointer;
        border-radius: 5px;
        @media (min-width: 320px) and (max-width: 480px) {
          margin-bottom: 1cm;
        }
        &:hover {
          border-color: green;
          color: green;
          background-color: transparent;
        }
      }
    }
  }
  .close {
    .btns {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.5cm;
      margin-bottom: 1cm;
      @media (min-width: 320px) and (max-width: 480px) {
        justify-content: space-between;
        padding: 1cm;
      }
      button,
      a {
        padding: 5px 25px;
        font-size: 25px;
        text-decoration: none;
        cursor: pointer;
      }
      .join {
        background-color: white;
        color: green;
        border: 2px solid green;
        &:hover {
          border-color: transparent;
          color: white;
          background-color: green;
        }
      }
      .contact {
        background-color: green;
        color: white;
        margin-right: 2.5cm;
        @media (min-width: 320px) and (max-width: 480px) {
          margin-right: 0;
        }
        border: 2px solid transparent;
        &:hover {
          color: green;
          background-color: transparent;
          border-color: green;
        }
      }
    }
  }
`;
