import React from 'react';

function User({ details }) {
    if(!details) {
        return <h3>Working to Fetch your User&apos;s details</h3>
    }
    return (
        <div className='user'>
            <h2>{details.first_name} {details.last_name}</h2>
            <p>Email: {details.email}</p>
        </div>
    )
};

export default User;