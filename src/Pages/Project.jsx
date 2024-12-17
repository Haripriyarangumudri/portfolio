
import React from "react";
import styled from "styled-components";

const PortfolioSection = styled.section`
  padding: 20px 20px 40px;
  text-align: center;
  margin-top: 60px;

  h2 {
    font-size: 2em;
    margin-bottom: 40px;

    span {
      color: white;
    }
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const PortfolioItem = styled.div`
  background: linear-gradient(145deg, #007bff8c, #0bb1e8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    margin-top: 0;
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
    margin-bottom: 20px;
  }

  a {
    color: #fff;
    text-decoration: none;
    background-color: #007bff;
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Projects = () => {
  return (
    <div>
      <PortfolioSection id="portfolio">
        <h2>
          Latest <span>Projects</span>
        </h2>
        <PortfolioGrid>
          <PortfolioItem>
            <h3>BLOOD BANK MANAGEMENT</h3>
            <p>
              This website acts as a medium between hospitals/clinics and
              donors/receivers. It is designed for two users: Donors/Receivers
              and Hospitals/Clinics, enabling them to add blood samples, request
              for blood, and check the status of requests.
            </p>
            <a
              href="https://fs-code-task-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </PortfolioItem>
          <PortfolioItem>
            <h3>Jokes Project with Typescript</h3>
            <p>
            "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",

            </p>
            <a
              href="https://jokes-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >              <i className="bx bx-link-external"></i>
            </a>
          </PortfolioItem>
          <PortfolioItem>
            <h3>Connovaction Seating Arrangment</h3>
            <p>
            The project is a web-based application designed to optimize seating arrangements for events, 
            classrooms, or offices. It allows users to create, manage, and customize seating layouts efficiently. 
            The system ensures organized allocation of seats, enhances visibility, and improves space utilization. 
            
            </p>
            <a
              href="https://vercel.com/haripriyarangumudris-projects/project"
              target="_blank"
              rel="noopener noreferrer"
            >            
              <i className="bx bx-link-external"></i>
            </a>
          </PortfolioItem>
        </PortfolioGrid>
      </PortfolioSection>
    </div>
  );
};

export default Projects;
