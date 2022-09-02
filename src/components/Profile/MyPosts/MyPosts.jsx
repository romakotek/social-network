import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="3"></textarea>
                <button>Add</button>
            </div>
            <div className={s.post}>
                <Post message='Hi Yerzhan!' />
                <Post message='You are awsome react developer!' />
                <Post message='Yerzhan, how do you earn $100000 monthly?' />
                <Post message='Yerzhan, you are dollar-millionare' />
            </div>
        </div>
    )
}

export default MyPosts;