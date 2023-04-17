import React from 'react';

const Flight = ({flight}) => {
    const {mission_name,launch_year,links:{mission_patch_small}} = flight;
    return (
        <div>
            {
                launch_year !=='2020' &&
                (
                    <>
                    <h4> {mission_name} {launch_year} </h4>
                        <img src = {mission_patch_small} alt={mission_name}/>
                    </>
                )


            }
        </div>
    );
};

export default Flight;