import React, {useState} from 'react';
import UserServiceData from '../../../services/UserService';

// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const EditModal = ({show, setShow, user}) => {
  const [username, setUsername] = useState('');
  //   const [admin, setAdmin] = useState(false);

  const handleSetUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  //   const handleSetAdmin = (e) => {
  //     const admin = e.target.value;
  //     setAdmin(admin);
  //   };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const data = {
      username,
      //   admin,
    };
    UserServiceData.update(user._id, data)
      .then((response) => {
        console.log(response.data);
        // setMessage('The tutorial was updated successfully!');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {show ? (
        <div className="overlay bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
          <div className="h-auto w-auto bg-blue-400 rounded mx-auto p-3">
            <div className="flex justify-between">
              <p className="text-xl">Edit {user.username} </p>
              <button onClick={() => setShow((prev) => !prev)}>X</button>
            </div>
            <div className="text-center space-y-3 pt-1 flex flex-col">
              <Form onSubmit={handleUpdateUser}>
                <label>Username: </label>
                <input onChange={handleSetUsername} type="text" required></input>
                {/* <label>Admin: </label>
                <input onChange={handleSetAdmin} type="checkbox" ></input> */}

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

export default EditModal;
