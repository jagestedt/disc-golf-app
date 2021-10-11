import React, { useEffect, useState } from 'react';
import UserDataService from '../../../services/UserService';

import EditModal from './EditModal';
import Search from './Search';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const toggleModal = (id, data) => {
        setShowModal((prev) => !prev);
        setModalData(data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        UserDataService.getAll()
            .then((res) => {
                setUsers(res.data);
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const deleteUser = (id) => {
        UserDataService.remove(id)
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const renderUsers = () => {
        return users.map((user, index) => {
            const { _id, username, email } = user;
            return (
                <tr key={index}>
                    <td className="p-2">{username}</td>
                    <td className="p-2">{email}</td>
                    <td className="p-2">
                        <button onClick={() => toggleModal(_id, user)} className="btn-primary">
                            Edit
                        </button>
                        <button onClick={() => deleteUser(_id)} className="btn btn-danger">
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div>
            <Search users={users} />
            <table>
                <tbody>
                    {renderUsers()}
                </tbody>
            </table>
            <EditModal show={showModal} setShow={setShowModal} user={modalData} />
        </div>
    );
};

export default Users;
