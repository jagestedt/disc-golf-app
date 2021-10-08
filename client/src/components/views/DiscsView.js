import React from 'react';

import Navigation from '../Navigation';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './DiscsView.scss';

const DiscsView = () => {
  return (
    <div className="container">
      <Navigation />
      <div className="discs-view">
        <h1>Your discs</h1>
        <ul className="disc-list p-0">
          <li className="disc-item mb-1">
            <div className="disc-info-container">
              <div className="left">
                <h2>Ballista</h2>
                <h3>Latitude 64</h3>
              </div>
              <div className="right">
                <Container className="grid-container">
                  <Row className="border-b">
                    <Col className="border-r rating-digit">
                      <div className="rating-container">
                        <p className="m-0">14</p>
                      </div>
                    </Col>
                    <Col className="border-l rating-digit">
                      <div className="rating-container">
                        <p className="m-0">14</p>
                      </div>
                    </Col>
                  </Row>
                  <Row className="border-t">
                    <Col className="border-r rating-digit">
                      <div className="rating-container">
                        <p className="m-0">14</p>
                      </div>
                    </Col>
                    <Col className="border-l rating-digit">
                      <div className="rating-container">
                        <p className="m-0">14</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DiscsView;
