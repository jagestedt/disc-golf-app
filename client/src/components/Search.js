import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';

const Search = ({users}) => {
  console.log(users);

  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <h1>Search</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search by username</Form.Label>
          <Form.Control type="text" placeholder="" required value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </Form.Group>
      </Form>
      <ul className="user-list">
        {users
          .filter((val) => {
            if (searchTerm === '') {
              return val;
            } else if (val.username.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return val;
            }
          })
          .map((val, key) => {
            return <li key={key}>{val.username}</li>;
          })}
      </ul>
    </div>
  );
};

export default Search;
