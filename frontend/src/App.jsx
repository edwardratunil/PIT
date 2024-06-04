import React from 'react';
import Users from './components/Users';
import UserInfos from './components/UserInfos';
import UserPosts from './components/UserPosts';
import Likes from './components/Likes';
import Comments from './components/Comments';

const App = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Laravel React Application</h1>
            <Users />
            <UserInfos />
            <UserPosts />
            <Likes />
            <Comments />
        </div>
    );
};

export default App;
