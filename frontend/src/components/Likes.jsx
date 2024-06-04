import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Likes = () => {
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        axios.get('/api/likes')
            .then(response => {
                setLikes(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Likes</h2>
            <ul>
                {likes.map(like => (
                    <li key={like.id} className="mb-1">
                        User ID: {like.user_id} - Post ID: {like.user_post_id} - Like: {like.like ? 'Yes' : 'No'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Likes;
