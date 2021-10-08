import React, {useState} from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditModal = () => {
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [speed, setSpeed] = useState(0);
  const [inBag, setInBag] = useState(false);

  const modalFormHandler = () => {};

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Form onSubmit={modalFormHandler} className="p-1">
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

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>In bag</Form.Label>
            <Form.Check type="checkbox" id="inBag" label={inBag} onChange={(e) => setInBag(e.target.value)} />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default EditModal;
