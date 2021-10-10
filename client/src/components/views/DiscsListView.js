import React, {useEffect, useState} from 'react';
import DiscDataService from '../../services/DiscService';

// import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AddDisc from './AddDisc';
import './DiscsListView.scss';

import EditModal from './EditModal';
import SearchDiscs from '../SearchDiscs';

const DiscsListView = () => {
  const [discs, setDiscs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const toggleModal = (id, data) => {
    setShowModal((prev) => !prev);
    setModalData(data);
  };

  useEffect(() => {
    getDiscs();
  }, []);

  const getDiscs = () => {
    DiscDataService.getAll()
      .then((res) => {
        setDiscs(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteDisc = (id) => {
    DiscDataService.remove(id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const renderDiscs = () => {
    return discs.map((disc, index) => {
      const {_id, name, manufacturer, comment, speed, glide, turn, fade} = disc;
      return (
        <div key={index} className="container">
          <li className="disc-item mb-1">
            <div className="disc-info-container">
              <div className="left">
                <h2>{name}</h2>
                <h3>{manufacturer}</h3>
                <p className="comment">{comment}</p>
              </div>
              <div className="right">
                <Container className="grid-container">
                  <Row className="border-b">
                    <Col className="border-r rating-digit">
                      <div className="rating-container">
                        <p className="m-0">{speed}</p>
                      </div>
                    </Col>
                    <Col className="border-l rating-digit">
                      <div className="rating-container">
                        <p className="m-0">{glide}</p>
                      </div>
                    </Col>
                  </Row>
                  <Row className="border-t">
                    <Col className="border-r rating-digit">
                      <div className="rating-container">
                        <p className="m-0">{turn}</p>
                      </div>
                    </Col>
                    <Col className="border-l rating-digit">
                      <div className="rating-container">
                        <p className="m-0">{fade}</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="p-2">
                <button onClick={() => toggleModal(_id, disc)} className="btn-primary">
                  Edit
                </button>
                <button onClick={() => deleteDisc(_id)} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </li>
        </div>
      );
    });
  };

  return (
    <div>
      <SearchDiscs discs={discs} />
      <AddDisc />
      <EditModal show={showModal} setShow={setShowModal} disc={modalData} />
      <h1>Your discs</h1>
      <ul className="disc-list p-0">{renderDiscs()}</ul>
    </div>
  );
};

export default DiscsListView;
