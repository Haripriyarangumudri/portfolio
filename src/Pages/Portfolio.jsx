
import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 180%;
  background-color: #121212;
`;

const Container = styled.div`
  position: relative;
  width: 80%;
  max-width: 1200px;
  background-color: #333;
  padding: 4rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Intro = styled.section`
  text-align: center;

  h2 {
    font-size: 1.5rem;
    color: #ccc;
  }

  h1 {
    font-size: 3rem;
    color: #00e0ff;
    margin: 0.5rem 0;
  }

  h3 {
    font-size: 2rem;
    color: #ccc;

    .highlight {
      color: #00e0ff;
    }
  }

  p {
    font-size: 1.2rem;
    color: #aaa;
    line-height: 1.6;
    margin-top: 1rem;
  }

  .btn {
    display: inline-block;
    background-color: #00e0ff;
    color: #333;
    border: none;
    padding: 0.7rem 1.5rem;
    margin-top: 20px;
    border-radius: 15px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: #00b4cc;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 2px solid aqua;
    border-radius: 50%;
    font-size: 20px;
    color: #00b4cc;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: #00e0ff;
      color: #333;
    }
  }
`;

const Portfolio = () => {
  return (
    <PageWrapper>
      <Container>
        {/* Main Content */}
        <Main>
          <Intro>
            <h2>Hello, It's Me</h2>
            <h1>Haripriya Rangumudri</h1>
            <h3>
              And I'm a <span className="highlight">Frontend Developer</span>
            </h3>

            <p>
              Passionate about creating beautiful and functional user interfaces.
              <br />
              I love learning new technologies and bringing ideas to life.
            </p>

            <a href="haripriyaresume.pdf" className="btn" download>
              Download CV
            </a>
          </Intro>
        </Main>

        {/* Social Icons */}
        <IconContainer>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-twitter" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-facebook-circle" />
          </a>
        </IconContainer>
      </Container>
    </PageWrapper>
  );
};

export default Portfolio;
