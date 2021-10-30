import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./NotFound.css";

//404 page component
const NotFound = () => {
  const img_uri = "https://i.ibb.co/f9cPpwr/404-img-4.jpg";
  return (
    <Container>
      {/* page titile */}
      <Helmet>
        <title>404 - Go Beyond Travels</title>
      </Helmet>

      <Row className=" justify-content-center align-items-center text-center error-container">
        <Col>
          <div className="error-text">
            <h1 className="fs-3">Opps! Page not found</h1>
            <p>
              The page you are looking for doesn't exist. Please try searching
              for some other page, or return to the website's homepage to find
              what you're looking for.
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <img
              className="error-img"
              src="https://www.tourx-react.egenslab.com/static/media/404.16338b63.png"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
