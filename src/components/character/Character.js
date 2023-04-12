import React from 'react';

const Character = (props) => {
    const {id,name,status,species,gender,image} = props;
    return (
        <>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Status: {status}</div>
            <div>Species: {species}</div>
            <div>Gender: {gender}</div>
            <img src= {image} alt={name}/>
        </>
    );
};
export default Character;