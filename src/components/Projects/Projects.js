import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import googleDocs from "../../Assets/Projects/Projectimg/googledoc.PNG";
import Calc from "../../Assets/Projects/Projectimg/Calc.PNG";
import editor from "../../Assets/Projects/Projectimg/twitter.PNG";
import EmployeeManagement from "../../Assets/Projects/Projectimg/chatify.PNG";
import weather from "../../Assets/Projects/Projectimg/weathers.PNG";
import Todo from "../../Assets/Projects/Projectimg/Todo.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmployeeManagement}
              isBlog={false}
              title="Employee Management Portal"
              description="Employee management portal build with React.js  The front end is built using HTML, CSS, and Bootstrap. The backend is built using Json Server"
              ghLink="https://github.com/kameshwar44/Employee-management-portal.git"
              demoLink="https://employee-management-portals.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Weather App build with React.js. The front end is built using HTML, CSS, and javascript. Fetch API is used to fetch the weather data."
              ghLink="https://github.com/kameshwar44/LiveWeatherApp.git"
              demoLink="https://weather-app-reactjs222.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Twitter Clone"
              description="Designed and developed a Twitter clone in React JS using modern frontend
              technologies used Recoil Js for state management.
              Implemented core features of Twitter, such as the ability to post tweets, follow
              and unfollow users, and like or retweet tweets.
              "
              ghLink="https://github.com/kameshwar44/TwitterClone.git"
              demoLink="https://twitterclone-reactjs11.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googleDocs}
              isBlog={false}
              title="Google Docs Clone"
              description="Google Docs Clone build with React.js. Developed a clone of Google Docs with full functionality.
              Implemented features for underlining, bolding, and italicizing text and many more."
              ghLink="https://github.com/kameshwar44/Google-Docs-Updated.git"
              demoLink="https://google-docs-clone11.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="Todo List App"
              description="Todo List App build with React.js with all the features of a todo list like adding, deleting, and editing todos ."
              ghLink="https://github.com/kameshwar44/Todo-List-css.git"
              demoLink="https://kameshwar44.github.io/Todo-List-css/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calc}
              isBlog={false}
              title="Calculator App"
              description="A basic Calculator App build with React.js that solves basic arithmetic calculations"
              ghLink="https://github.com/kameshwar44/CalcualtorApp.git"
              demoLink="https://jazzy-pika-3383cc.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
