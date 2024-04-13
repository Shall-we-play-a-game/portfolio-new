import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dashboard from "../../Assets/Projects/dashboard.png";
import resto from "../../Assets/Projects/resto.png";
import imdb from "../../Assets/Projects/imdb.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import ytclone from "../../Assets/Projects/ytclone.png";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title='Online Bazaar'
              description='"Online Bazaar" is a feature-rich e-commerce platform built using the MERN (MongoDB, Express.js, React, Node.js) stack. This dynamic online marketplace offers users a seamless shopping experience with intuitive navigation, personalized recommendations, secure transactions, and efficient order management. Leveraging the power of MERN, Online Bazaar provides a robust and scalable solution that connects buyers and sellers in a modern digital marketplace.'
              ghLink='https://github.com/Shall-we-play-a-game/New-ecommerce'
              demoLink='https://onlinee-bazaar.netlify.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={imdb}
              isBlog={false}
              title='Film Vault'
              description={`"Film Vault" is a captivating IMDb-inspired project crafted using the MERN (MongoDB, Express.js, React, Node.js) stack. This platform serves as a comprehensive database of movies, TV shows, and celebrities, offering users a user-friendly interface to explore, rate, and review their favorite films. With MERN's capabilities, Film Vault delivers a seamless user experience, enabling enthusiasts to dive into the world of cinema and stay connected with the latest entertainment trends.`}
              ghLink='https://github.com/Shall-we-play-a-game/IMDb-clone'
              demoLink='https://imbd-cloned.netlify.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={resto}
              isBlog={false}
              title='Resto Landing page'
              description={`"Gericht" is an enticing restaurant landing page project brought to life with React JS. This visually stunning webpage offers a tantalizing glimpse into the restaurant's ambiance, menu, and reservation options. Through the power of React JS, Gericht delivers an immersive digital experience that captures the essence of the dining establishment, enticing visitors to savor its offerings and make reservations with ease.`}
              ghLink='https://github.com/Shall-we-play-a-game/resturant-landing-page'
              demoLink='https://resto-landing-page.netlify.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title='Admin Dashboard'
              description={`"EComvison" is a powerful admin dashboard project developed using JavaScript, NodeJS, and Chart JS. This intuitive platform provides essential data visualization and management tools for e-commerce businesses. With interactive charts powered by Chart JS, EComvison enables informed decision-making and streamlined monitoring of key metrics, making it an indispensable asset for optimizing online retail operations. `}
              ghLink='https://github.com/Shall-we-play-a-game/fullstack-admin'
              demoLink='https://admin-dashboard-mnc.netlify.app'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={ytclone}
              isBlog={false}
              title='Youtube Clone'
              description={`"candidMedia" is a dynamic YouTube clone project powered by Javascript and Rapid API. This platform replicates the video-sharing experience, allowing users to upload, view, and engage with a wide array of multimedia content. Leveraging Javascript and Rapid API, candidMedia offers a familiar interface for seamless video discovery and sharing, bringing the essence of YouTube into a new digital realm.`}
              ghLink='https://github.com/Shall-we-play-a-game/YoutubeClone'
              demoLink='https://candidmedia.netlify.app/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
