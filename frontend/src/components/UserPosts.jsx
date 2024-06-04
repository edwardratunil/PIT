import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserPosts = () => {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/user_posts')
            .then(response => {
                setUserPosts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">User Posts</h2>
            <ul>
                {userPosts.map(userPost => (
                    <li key={userPost.id} className="mb-1">
                        {userPost.text_content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPosts;
