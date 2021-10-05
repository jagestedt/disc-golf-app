import React, { useEffect, useState } from 'react';

import Search from '../Search'

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/users/all')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUsers(data);
                console.log(data);
            });
    }, []);

    const renderUsers = () => {
        return users.map((user, index) => {
            const { username, email } = user;
            return (
                <table>
                    <tbody>
                        <tr>
                            <td className="p-2">{username}</td>
                            <td className="p-2">{email}</td>
                            <td className="p-2">
                                <button className="btn-primary">
                                    Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            );
        });
    };

    return <div>
        <Search users={users} />
        {renderUsers()}
    </div>;
};

export default UsersList;