import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

function Contact() {
  return (
    <Container>
      <div className="form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSekqJwtWqnqjQxT0N-1migQqYACoRkK55SfVQECl--T15BqXQ/viewform?embedded=true"
          width="900"
          height="1400"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
