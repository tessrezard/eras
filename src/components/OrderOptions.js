import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';

const OrderOptions = ({ sorting, orderOption, setOrderOption }) => {




    const handleOrderOptionsClick = (order) => {
        setOrderOption(order);
    }

    return (
        <>
            <div className="order-options-whole-container">
                
                <form className="order-options-form">

                    <div>
                        <input
                            className="filter-button"
                            type="radio"
                            checked={orderOption === "eraOrderOption"}
                            value="eraOrderOption"
                            id="eraOrderOption"
                            onChange={() => handleOrderOptionsClick('eraOrderOption')}
                        />
                        <label htmlFor='eraOrderOption'> Era Order </label>
                    </div>

                    <div>
                        <input
                            className="filter-button"
                            type="radio"
                            checked={orderOption === "durationOrderOption"}
                            value="durationOrderOption"
                            id="durationOrderOption"
                            onChange={() => handleOrderOptionsClick('durationOrderOption')}
                        />
                        <label htmlFor='durationOrderOption'> {sorting} Order </label>
                    </div>

                </form>


            </div>
        </>
    );
};





export default OrderOptions;
