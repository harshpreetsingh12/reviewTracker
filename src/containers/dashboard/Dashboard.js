import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../reduxStore/actionsReducers/themeReducer/themeActions';

const Dashboard = ({}) => {
    const dispatch= useDispatch()
  
    return (
        <section>
            <h1>Hello, Dashboard !</h1>
            <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
            
        </section>
    )
}

export default Dashboard
