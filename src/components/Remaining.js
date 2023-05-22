import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { remaining, Location } = useContext(AppContext);

    return (
        <div className='alert alert-primary'>
            <span>Remaining: {Location}{remaining}</span>
        </div>
    );
};

export default Remaining;
