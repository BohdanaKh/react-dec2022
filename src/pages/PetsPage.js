import React from 'react';

import Cats from "../components/pets/Cats";
import Dogs from "../components/pets/Dogs";

const PetsPage = () => {

    return (
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <Cats/>
            <Dogs/>
        </div>
    );
};

export default PetsPage;