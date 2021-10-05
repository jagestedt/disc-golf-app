import React, { useEffect, useState } from 'react';

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

    return <div>

    </div>;
};

export default UsersList;
