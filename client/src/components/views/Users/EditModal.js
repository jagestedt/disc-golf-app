import React, {useState} from 'react';
import DiscServiceData from '../../../services/DiscService';

// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const EditModal = ({show, setShow, disc}) => {
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [comment, setComment] = useState('');
  const [speed, setSpeed] = useState('');
  const [glide, setGlide] = useState('');
  const [turn, setTurn] = useState('');
  const [fade, setFade] = useState('');

  const handleSetName = (event) => {
    const name = event.target.value;
    setName(name);
  };
  const handleSetManufacturer = (event) => {
    const manufacturer = event.target.value;
    console.log(manufacturer);
    setManufacturer(manufacturer);
  };
  const handleSetComment = (event) => {
    const comment = event.target.value;
    setComment(comment);
  };
  const handleSetSpeed = (event) => {
    const speed = event.target.value;
    setSpeed(speed);
  };
  const handleSetGlide = (event) => {
    const glide = event.target.value;
    setGlide(glide);
  };
  const handleSetTurn = (event) => {
    const turn = event.target.value;
    setTurn(turn);
  };
  const handleSetFade = (event) => {
    const fade = event.target.value;
    setFade(fade);
  };

  const handleUpdateDisc = (e) => {
    e.preventDefault();
    const data = {
      name,
      manufacturer,
      comment,
      speed,
      glide,
      turn,
      fade,
    };
    DiscServiceData.update(disc._id, data)
      .then((response) => {
        console.log(response.data);
        // setMessage('The tutorial was updated successfully!');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {show ? (
        <div className="overlay bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
          <div className="h-auto w-auto bg-blue-400 rounded mx-auto p-3">
            <div className="flex justify-between">
              <p className="text-xl">Edit {disc.name} </p>
              <button onClick={() => setShow((prev) => !prev)}>X</button>
            </div>
            <div className="text-center space-y-3 pt-1 flex flex-col">
              <Form onSubmit={handleUpdateDisc}>
                <label>Name: </label>
                <input onChange={handleSetName} type="text" required></input>
                <label>Manufacturer: </label>
                <input onChange={handleSetManufacturer} type="text" required></input>
                <label>Comment: </label>
                <input onChange={handleSetComment} type="text" required></input>
                <label>Speed: </label>
                <input onChange={handleSetSpeed} type="number" min="1" max="14" required></input>
                <label>Glide: </label>
                <input onChange={handleSetGlide} type="number" min="1" max="7" required></input>
                <label>Turn: </label>
                <input onChange={handleSetTurn} type="number" value={turn} min="-5" max="1" required></input>
                <label>Fade: </label>
                <input onChange={handleSetFade} type="number" min="0" max="5" required></input>

                <div className="text-right space-x-3">
                  <button type="submit" className="py-1 px-2 rounded w-32 bg-green-300 hover:bg-green-200 text-indigo-900">
                    Save
                  </button>
                  <button onClick={() => setShow((prev) => !prev)} className="py-1 px-2 rounded w-32 bg-red-300 hover:bg-red-200 text-indigo-900">
                    Close
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

// render(<Example />);
export default EditModal;
