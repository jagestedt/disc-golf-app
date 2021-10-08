import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddDisc = () => {
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [speed, setSpeed] = useState(0);
  const [glide, setGlide] = useState(0);
  const [turn, setTurn] = useState(0);
  const [fade, setFade] = useState(0);
  const [inBag, setInBag] = useState(false);

  const addDiscFormHandler = () => {
    console.log('add-disc');
  };

  return (
    <div>
      {/* <Form onSubmit={addDiscFormHandler} className="p-1">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Disc name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" required value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Manufacturer</Form.Label>
          <Form.Control type="text" placeholder="manufacturer" required value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Speed</Form.Label>
          <Form.Control type="number" required value={speed} onChange={(e) => setSpeed(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Glide</Form.Label>
          <Form.Control type="number" required value={glide} onChange={(e) => setGlide(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Turn</Form.Label>
          <Form.Control type="number" required value={turn} onChange={(e) => setTurn(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Fade</Form.Label>
          <Form.Control type="number" required value={fade} onChange={(e) => setFade(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>In bag</Form.Label>
          <Form.Check type="checkbox" id="inBag" label={inBag} onChange={(e) => setInBag(e.target.value)} />
        </Form.Group>
      </Form> */}
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Disc name</Form.Label>
            <Form.Control type="text" placeholder="Enter disc name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridManufacturer">
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control type="text" placeholder="Enter manufacturer" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formComment">
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" placeholder="Enter a comment" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridSpeed">
          <Form.Label>Speed</Form.Label>
          <Form.Control type="number" placeholder={speed} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridGlide">
            <Form.Label>Glide</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddDisc;
