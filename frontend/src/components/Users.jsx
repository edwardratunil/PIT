import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="mb-1">
                        {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
