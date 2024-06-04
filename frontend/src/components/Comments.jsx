import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('/api/comments')
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id} className="mb-1">
                        User ID: {comment.user_id} - Post ID: {comment.user_post_id} - Comment: {comment.comment}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
