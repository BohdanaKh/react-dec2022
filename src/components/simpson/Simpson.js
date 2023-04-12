import React from 'react';

const Simpson = ({simpson}) => {
    const {name,surname,age,info,photo}=simpson;

    return (
        <>
            <h3>{name} {surname}</h3>
            <h3>Age: {age} </h3>
            <p>{info}</p>
            <img src={photo} alt={name}/>
            <hr/>
        </>
    );
};

export default Simpson;