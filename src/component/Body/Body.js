import React from 'react';
import mainbodyClass from './Body.module.css';

const Body = () => {
    return (
        <div className={['container',mainbodyClass.container,].join(' ')}>
            <h2>Body</h2>
        </div>
    )
}

export default Body;