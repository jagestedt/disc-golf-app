import React, {useEffect, useState} from 'react';
import http from '../../http-common';

// import Search from '../Search';

const DiscsListView = () => {
  const [discs, setDiscs] = useState([]);

  const editDisc = (id, data) => {
    return http.put(`/discs/${id}`, data);
  };

  const deleteDisc = (id) => {
    return http.delete(`/discs/${id}`);
  };

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
      const {_id, name, manufacturer, description, speed} = disc;
      return (
        <table>
          <tbody>
            <tr key={index}>
              <td className="p-2">{name}</td>
              <td className="p-2">{manufacturer}</td>
              <td className="p-2">{description}</td>
              <td className="p-2">{speed}</td>
              <td className="p-2">
                <button onClick={() => editDisc(_id, {name: 'Framklin'})} className="btn-primary">
                  Edit
                </button>
              </td>
              <td className="p-2">
                <button onClick={() => deleteDisc(_id)} className="btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      );
    });
  };

  return (
    <div>
      {/* <Search discs={discs} /> */}
      {renderDiscs()}
    </div>
  );
};

export default DiscsListView;
