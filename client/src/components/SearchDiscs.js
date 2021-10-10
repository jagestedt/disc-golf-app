import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';

const SearchDiscs = ({discs}) => {
  console.log(discs);

  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <h1>Search</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Label>Search discs by name</Form.Label>
          <Form.Control type="text" placeholder="" required value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </Form.Group>
      </Form>
      <ul className="user-list">
        {discs
          .filter((val) => {
            if (searchTerm === '') {
              return val;
            } else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return val;
            }
          })
          .map((val, key) => {
            return <li key={key}>{val.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default SearchDiscs;
