import React, { useEffect, useState } from 'react';
import http from '../../http-common';

// import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AddDisc from './AddDisc';
import './DiscsListView.scss'

import EditModal from './EditModal';
// import Search from '../Search';

const DiscsListView = () => {
    const [discs, setDiscs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    // const editDisc = (id, data) => {
    //     return http.put(`/discs/${id}`, data);
    // };

    const deleteDisc = (id) => {
        return http.delete(`/discs/${id}`);
    };

    const toggleModal = (data) => {
        setShowModal((prev) => !prev);
        setModalData(data);
    }

    useEffect(() => {
        fetch('http://localhost:5000/api/discs/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDiscs(data);
                console.log(data);
            });
    }, []);

    const renderDiscs = () => {
        return discs.map((disc, index) => {
            const { _id, name, manufacturer, comment, speed, glide, turn, fade } = disc;
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
                                {/* <button onClick={() => editDisc(_id, { name: 'Framklin' })} className="btn-primary">
                                    Edit
                                </button> */}
                                {/* <button onClick={() => toggleModal(_id, disc)} className="btn-primary">
                                    Edit
                                </button> */}
                                <EditModal show={showModal} setShow={setShowModal} data={modalData} />
                                <button onClick={() => deleteDisc(_id)} className="btn-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li >
                </div >
            );
        });
    };

    return (
        <div>
            {/* <Search discs={discs} /> */}
            <AddDisc />
            <h1>Your discs</h1>
            <ul className="disc-list p-0">
                {renderDiscs()}
            </ul>
            <EditModal show={showModal} setShow={setShowModal} data={modalData} />
        </div>
    );
};

export default DiscsListView;
