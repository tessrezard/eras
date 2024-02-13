import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles/CSS/main.css'
import Header from './components/Header';
const Root = () => {
    return (
        <>
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <div className='whole-container'>
                        <div className='main-container'>
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>

        </>
    );
};

export default Root;