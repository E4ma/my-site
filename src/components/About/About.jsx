import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';


const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume, projects } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree}
                </p>
               <p>
               <div className="d-flex mt-3">
                    <div >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn mr-3 cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </div>
                <div>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn mr-3 cta-btn--resume"
                    href=""
                    >
                    <Link to="projects" smooth duration={1000}>
                    {projects}
                    </Link>
                  </a>
                </div>

                </div>
                <div className="mt-5">
                  <h3 className="d-flex ">Tech Stack</h3>
                  <p>HTML / CSS / Javascript
                  <ProgressBar animated now={100} />
                  </p>
                  <p>GraphQL & GatsbyJs
                  <ProgressBar animated variant="warning" now={50} />
                  </p>
                  <p>ExpressJS
                  <ProgressBar animated variant="info" now={80} />
                  </p>
                  <p>ReactJs
                  <ProgressBar animated variant="danger" now={100} />
                  </p>
                  <p>PostgreSQL & MongoDB
                  <ProgressBar animated variant="" now={80} />
                  </p>
                
                </div>
               </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
