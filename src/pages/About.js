import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Flip } from "react-reveal";

function About() {
  return (
    <Container>
      <div className="story">
        <h1>Our Story</h1>
        <div className="content1">
          <p>
            Project SWIMS was kicked off by the science club leaders of
            Government Bilingual Practicing High School Yaounde, Cameroon. This
            group is led by Fru-Mark Carrington Chei. They started off during
            the end of the year 2019 during the early out break of the
            Coronavirus. Mark Carrington created a team and they decided to come
            up with an idea to ease the disposal of waste in their school in a
            sustainable manner while protecting and reducing the rate of the
            spread of the coronavirus. They came up with an idea to build a
            smart dustbin that opens when it senses someone coming close to
            dispose of waste. This idea was suitable to limit the rate of spread
            of the coronavirus in the school environment. They did not just end
            up with the idea of limit the smart dustbin to just a dustbin that
            could open and close automatically; they thought of furthering the
            idea to help contribute to their community, by building a dustbin
            that could help for waste collection and disposal in an efficient
            and sustainable manner thereby contributing to the UN sustainable
            development goal 13.
          </p>
          <div className="image">
            <img src="/images/team.jpg" alt="team" />
          </div>
        </div>
      </div>
      <div className="mission">
        <h1>Our Mission</h1>
        <div className="content1">
          <div className="image">
            <img src="/images/hysacam.png" alt="hysacam" />
          </div>
          <p>
            After a lot of problem validation they came up with SWIMS in the
            year 2021. SWIMS means Smart Waste Intelligent Monitoring System.
            SWIMS has a mission to build economic solutions for problems
            sorrounding the waste sector. SWIMS has a unique mission to help
            avoid the climate crisis and contribute to the fulfilling of the
            goal 13 of the sustainable development goals. Mark and his team has
            gone as far as to come up with their first project: a
            hardware-software solution that will make waste collection and
            disposal as easy as possible and sustainable. Waste collection is
            the most difficult sector in Africa’s Waste management system. Out
            of the total waste that is produced per year in Africa, just 20% of
            this collected. Despite all the efforts waste collectors make in
            collection they are not still able to collect more waste. They
            complain that They spend more time, energy, and resources yet they
            are not still able to accomplish their collection plans. Instead,
            dustbins overflow and waste remains exposed to the environment.
            Waste collectors end up increasing their carbon footprints in the
            environment since they will need to dispatch more trucks to collect
            and spend more on fuel consumption.
          </p>
        </div>
      </div>
      <div className="team">
        <h1>
          The Team <hr />
        </h1>
        <div className="members">
          <Flip right>
            <div className="member1">
              <div className="image">
                <img src="/images/mark.jpg" alt="member1" />
              </div>
              <h2>
                Fru-Mark Carrington Chei <br /> Founder and CEO of SWIMS
              </h2>
            </div>
          </Flip>
          <Flip right>
            <div className="member2">
              <div className="image">
                <img src="/images/Harris.jpg" alt="member2" />
              </div>
              <h2>
                Tardzenyuy Brian Harris Ngoran <br /> Co-founder
              </h2>
            </div>
          </Flip>
          <Flip right>
            <div className="member3">
              <div className="image">
                <img src="/images/alida.jpg" alt="member3" />
              </div>
              <h2>
                Epotie Alida <br /> Co-founder
              </h2>
            </div>
          </Flip>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .story {
    padding: 1cm;
    h1 {
      font-size: 40px;
      color: green;
      font-weight: bold;
    }
    .content1 {
      display: flex;
      align-items: center;
      @media (min-width: 320px) and (max-width: 480px) {
        flex-wrap: wrap;
      }

      p {
        width: 50%;
        font-size: 22px;
        text-align: justify;
        margin-right: 1cm;
        @media (min-width: 320px) and (max-width: 480px) {
          width: 100%;
          margin-right: 0;
        }
      }
      .image {
        width: 40%;
        @media (min-width: 320px) and (max-width: 480px) {
          width: 100%;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .mission {
    display: flex;
    flex-direction: column;
    padding: 1cm;

    h1 {
      font-size: 40px;
      font-weight: bold;
      color: green;
      margin-bottom: 0.5cm;
    }
    .content1 {
      display: flex;
      @media (min-width: 320px) and (max-width: 480px) {
        flex-wrap: wrap;
      }
      p {
        font-size: 18px;
        width: 50%;
        text-align: justify;
        @media (min-width: 320px) and (max-width: 480px) {
          width: 100%;
          font-size: 22px;
        }
      }

      .image {
        width: 50%;
        margin-right: 1cm;
        @media (min-width: 320px) and (max-width: 480px) {
          width: 100%;
          margin-right: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .team {
    display: flex;
    flex-direction: column;
    padding: 1cm 2cm;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: white;
    margin-bottom: 0.5cm;

    h1 {
      margin-bottom: 1cm;
    }
    .members {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (min-width: 320px) and (max-width: 480px) {
        flex-wrap: wrap;
      }
      .member1,
      .member2,
      .member3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 0.5cm;
        h2 {
          text-align: center;
          color: white;
        }
        .image {
          width: 90%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;
