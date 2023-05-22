import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// Add code to import the other components here under

import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
import Budget from "./components/Budget";
import Location from "./components/Location";
import Remaining from "./components/Remaining";


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <Location />
                    </div>
                    
                </div>    

                <h3 className='mt-3'>Shopping Cart</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>

                        {/* Add ExpenseItem component here under */}        

                        {/* Add AllocationForm component here under */} 
                <h3 className='mt-3'>Add Items</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>       
            </div>
        </AppProvider>
    );
};
export default App;
