import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/FirebaseConfig";
import { createUser } from "../Firebase/Useraccount";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// slider settings
var settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  autoplay: true,
};

function HeaderIntro() {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const submitCreateAccountForm = () => {
    createUser(auth, email, password1, password2);
    const inputs = document.querySelectorAll(
      "#name, #email, #password1, #password2"
    );
    inputs.forEach((input) => (input.value = ""));
  };

  return (
    <Container id="top">
      <div className="carousel">
        <CarouselSlider {...settings}>
          <SliderContent
            imageLocation="/images/slide0.png"
            imageDescription="introduction"
            imageText="Let SWIMS help you dispose and collect waste easily and sustainably"
          />
          <SliderContent
            imageLocation="/images/slide1.png"
            imageDescription="sensor"
            imageText="The SWIMS dustbin smart sensor to monitor dustbin waste level"
          />
          <SliderContent
            imageLocation="/images/slide3.png"
            imageDescription="dusbtin"
            imageText="Monitor the level of your dustbin with the SWIMS smart sensor"
          />
          <SliderContent
            imageLocation="/images/slide2.png"
            imageDescription="swims-platform"
            imageText="Introducing the swims platform, software for realtime 
                    monitoring of your dustbins"
          />
          <SliderContent
            imageLocation="/images/slide4.png"
            imageDescription="routes"
            imageText="Enjoy Easy routing to ease waste collection with the SWIMS platorm"
          />
        </CarouselSlider>
      </div>
      <div className="join">
        <div className="join-form">
          <h1>Create Your SWIMS Account Now</h1>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="Password"
            id="password1"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            placeholder="password"
          />
          <input
            type="Password"
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="re-type password"
          />
          <div className="btns">
            <button onClick={submitCreateAccountForm} className="account">
              Create Account
            </button>
            <button onClick={() => navigate("/contact")} className="contact">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

function SliderContent(props) {
  return (
    <SliderIntro>
      <div className="image">
        <img src={props.imageLocation} alt={props.imageDescription} />
      </div>
      <div className="text">
        <h1>{props.imageText}</h1>
      </div>
    </SliderIntro>
  );
}

export default HeaderIntro;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1cm;
  height: 68vh;
  background-color: rgb(3, 159, 3);
  @media (min-width: 320px) and (max-width: 480px) {
    flex-wrap: wrap;
    height: fit-content;
  }
  .carousel {
    width: 50%;
    margin-left: 1.5cm;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 100%;
      margin-left: 0;
      margin-bottom: 1cm;
    }
  }
  .join {
    width: 50%;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 100%;
    }

    .join-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        color: white;
        text-align: center;
        width: 80%;
      }
      input {
        margin-bottom: 0.25cm;
        width: 70%;
        height: 1cm;
        border-radius: 10px;
        padding: 5px 5px 5px 20px;
        font-size: 20px;
      }
      .btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (min-width: 320px) and (max-width: 480px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          button {
            margin: 0;
            margin-bottom: 0.5cm;
          }
        }
        button {
          padding: 5px 10px;
          font-size: 25px;
          border-radius: 10px;
          &:hover {
            cursor: pointer;
          }
        }
        .account {
          background-color: white;
          color: green;
          border: 2px solid transparent;
          margin-right: 20px;
          @media (min-width: 320px) and (max-width: 480px) {
            margin-right: 0;
          }
          &:hover {
            border-color: black;
            color: black;
          }
        }
        .contact {
          background-color: transparent;
          color: white;
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
`;

const CarouselSlider = styled(Slider)`
  .slick-dots li button:before {
    font-size: 10px;
    color: white;
    opacity: 75%;
  }
  .slick-dots li.slick-active button:before {
    font-size: 20px;
    color: white;
    opacity: 90%;
  }
  .slick-prev,
  .slick-next {
    display: none;
    z-index: -1;
  }
  .slick-next {
    right: 1cm;
  }
  .slick-prev {
    left: 1cm;
  }
`;

const SliderIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .image {
    width: 10cm;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 7cm;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }
  .text {
    text-align: center;
    color: white;
    font-size: 15px;
    width: 70%;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 10px;
    }
  }
`;
