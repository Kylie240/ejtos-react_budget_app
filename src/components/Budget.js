import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const {dispatch, Location } = useContext(AppContext);

    const changeBudget = (val)=>{
            dispatch({
                type: 'CHG_BUDGET',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Budget: {Location} {
            <input name="Budget" id="Budget" max="20000" step="10" value="20000"></input>	
      }	
    </div>
    );
};

export default Budget;