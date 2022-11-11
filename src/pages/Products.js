import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Fade } from "react-reveal";

function Products() {
  return (
    <Container>
      <ProductElement
        src="/images/products/dustbin.jpg"
        alt="dustbin"
        title="Smart Dustbins"
        description="We provide our target customers with smart dustbins and implantable dustbin
        sensors which have the capability of monitoring the level of waste and location
        of the dustbin"
      />
      <ProductElement
        src="/images/products/software.png"
        alt="swims-platform"
        title="SWIMS Platform"
        description="SWIMS platform is software we built for our users that benefits both
        dustbin users and waste collectors by providing features going from real time waste
        monitoring, smart collection plan generation, routing optimization. "
      />
      <ProductElement
        src="/images/products/screen.jpg"
        alt="route-optimization"
        title="The Route optimization Feature"
        description="The route optimization feature will help waste collectors by suggesting
        to them short routes they can use during their collection."
      />
      <ProductElement
        src="/images/products/cloud.jpg"
        alt="cloud"
        title="Realtime Cloud Updates"
        description="Enjoy fast realtime cloud updates from the SWIMS platform between your
        dustbin and software."
      />
      <ProductElement
        src="/images/products/sensor.jpg"
        alt="swimsense"
        title="swimsense version 1.0"
        description="A fast implantable dustbin sensor with WiFi capabilities to communicate
        with the swims cloud. This sensor has the full capability to monitor the level of waste
        in dustbins and give realtime updates to the SWIMS platform."
      />
      <Footer />
    </Container>
  );
}

function ProductElement(props) {
  return (
    <Fade bottom>
      <ProductContainer>
        <div className="image">
          <img src={props.src} alt={props.alt} />
        </div>
        <div className="text">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <button>Contact Us</button>
        </div>
      </ProductContainer>
    </Fade>
  );
}

export default Products;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: green;
  color: white;
  padding: 1.5cm;
  margin: 1cm 2cm;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  width: 80%;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-wrap: wrap;
    width: 82.5%;
    padding: 0;
    margin: 0;
    margin: 0.5cm;
    padding: 0.5cm;
  }
  .image {
    width: 50%;
    margin-right: 1cm;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 0.25cm;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 100%;
    }
    h1 {
      font-size: 3em;
      @media (min-width: 320px) and (max-width: 480px) {
        font-size: 2em;
      }
    }
    p {
      text-align: justify;
      font-size: 1.7em;
      margin-bottom: 20px;
      @media (min-width: 320px) and (max-width: 480px) {
        font-size: 1.3em;
      }
    }
    button {
      padding: 0.5cm 1cm;
      font-size: 25px;
      background-color: white;
      color: green;
      border: 2px solid transparent;
      cursor: pointer;
      border-radius: 10px;
      @media (min-width: 320px) and (max-width: 480px) {
        padding: 0.25cm 0.5cm;
      }
      &:hover {
        color: white;
        border-color: white;
        background-color: transparent;
      }
    }
  }
`;

const Container = styled.div``;
