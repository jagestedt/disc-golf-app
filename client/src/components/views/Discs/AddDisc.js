import React, {useState} from 'react';
import DiscDataService from '../../../services/DiscService';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddDisc = () => {
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [comment, setComment] = useState('');
  const [speed, setSpeed] = useState(0);
  const [glide, setGlide] = useState(0);
  const [turn, setTurn] = useState(0);
  const [fade, setFade] = useState(0);
  const [error, setError] = useState('');

  const handleAddDisc = () => {
    const data = {name, manufacturer, comment, speed, glide, turn, fade};

    DiscDataService.create(data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      });
  };

  return (
    <div>
      {error && <span className="error-message">{error}</span>}
      <Form onSubmit={handleAddDisc}>
        <h5>Add a disc</h5>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Disc name</Form.Label>
            <Form.Control required type="text" placeholder="Enter disc name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridManufacturer">
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control required type="text" placeholder="Enter manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formComment">
          <Form.Label>Comment</Form.Label>
          <Form.Control required as="textarea" placeholder="Enter a comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        </Form.Group>
        <h6>Ratings</h6>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridSpeed">
            <Form.Label>Speed (1 — 14)</Form.Label>
            <Form.Control required type="number" placeholder="1" value={speed} min="1" max="14" onChange={(e) => setSpeed(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGlide">
            <Form.Label>Glide (1 — 7)</Form.Label>
            <Form.Control required type="number" value={glide} min="1" max="7" onChange={(e) => setGlide(e.target.value)} />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridTurn">
            <Form.Label>Turn (-5 — 1)</Form.Label>
            <Form.Control required type="number" placeholder="0" value={turn} min="-5" max="1" onChange={(e) => setTurn(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridFade">
            <Form.Label>Fade (0 — 5)</Form.Label>
            <Form.Control required type="number" placeholder="0" value={fade} min="0" max="5" onChange={(e) => setFade(e.target.value)} />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Add disc
        </Button>
      </Form>
    </div>
  );
};

export default AddDisc;
