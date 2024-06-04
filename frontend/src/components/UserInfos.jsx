import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserInfos = () => {
    const [userInfos, setUserInfos] = useState([]);

    useEffect(() => {
        axios.get('/api/user_infos')
            .then(response => {
                setUserInfos(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">User Infos</h2>
            <ul>
                {userInfos.map(userInfo => (
                    <li key={userInfo.id} className="mb-1">
                        {userInfo.first_name} {userInfo.last_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserInfos;
