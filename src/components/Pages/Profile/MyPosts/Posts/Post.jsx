import React, { useState } from 'react';
import s from './Post.module.css';

const Post = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div className={s.item}>
            <div>
                <img src="https://image.shutterstock.com/image-vector/my-account-profile-user-icon-260nw-1700343232.jpg" alt="" />
                {props.message}
                <div>
                    <button onClick={() => setCount(count + 1)}>Like</button> {count}
                </div>
            </div>


        </div>
    )
}

export default Post;