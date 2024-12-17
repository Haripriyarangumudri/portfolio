

import React from "react";
import styled from "styled-components";
import profileImg from "../assets/hari.jpg";

// Styled Components
const ProfileSection = styled.section`
  display: flex;
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
  height: calc(100vh - 80px);
  padding: 40px;
  margin-top: 80px; /* Add margin to avoid overlapping with the header */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Hexagon = styled.div`
  width: 350px;
  height: 250px;
  background: rgb(221, 232, 232);
  clip-path: polygon(50% 2%, 98% 27%, 97% 75%, 50% 97%, 2% 73%, 2% 27%);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
    height: 90%;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`;

const AboutContainer = styled.div`
  max-width: 600px;
  padding: 20px;

  h2 {
    font-size: 2rem;
    color: #00ffff;
    margin-bottom: 10px;
    text-align: left;
  }

  h3 {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 20px;
    text-align: left;
  }

  p {
    font-size: 1rem;
    color: #cccccc;
    margin-bottom: 20px;
    line-height: 1.6;
    text-align: justify;
  }

  button {
    background-color: #00ffff;
    color: #1c1c1c;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: #1c1c1c;
      color: #00ffff;
      border: 1px solid rgb(223, 235, 235);
      transform: scale(1.1);
    }
  }
`;

// React Component
const AboutMe = () => {
  return (
    <ProfileSection>
      <ContentWrapper>
        {/* Image (Hexagon) */}
        <Hexagon>
          <img src={profileImg} alt="Haripriya" />
        </Hexagon>

        {/* About Me Text */}
        <AboutContainer>
          <h2>About Me</h2>
          <h3>Haripriya Rangumudri - Trainee</h3>
          <p>
            Hi! I'm <strong>Haripriya Rangumudri</strong>,A motivated and detail-oriented Software Trainee with a
             strong desire to learn and grow in the software development field. I am passionate about understanding
              complex systems, solving problems, and contributing to the development of efficient, user-friendly 
              applications. Eager to apply my knowledge and enhance my skills in a collaborative environment 
              while working on innovative projects
          </p>
          <p>
            <strong>Technologies I Work With:</strong> HTML, CSS, JavaScript, React,Sql,C#,Java
          </p>
          <p>
            <strong>Education:</strong> Bachelor's in Computer Science, Graduated in 2024 from Dr. B.R. Ambedkar
            University
          </p>
          <p>
            <strong>Projects:</strong>
            <ul>
              <li>**Portfolio Website**: Designed and developed a personal portfolio website to showcase my projects.</li>
              <li>**connovaction-Seating-Arrangment**:It is a system designed to efficiently organize and manage seating layouts for events,
                 ensuring optimal space utilization, clear visibility, and seamless coordination for participants.</li>
              <li>**Blood-Bank-Managment-syetem**: It is a web-based application that connects donors, receivers,
                 and hospitals, enabling efficient management of blood donations, requests, and inventory 
                 to ensure timely availability of blood.</li>
            </ul>
          </p>
        </AboutContainer>
      </ContentWrapper>
    </ProfileSection>
  );
};

export default AboutMe;

