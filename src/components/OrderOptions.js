import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';

const OrderOptions = ({ sorting, orderOption, setOrderOption }) => {

    const [showOptions, setShowOptions] = useState(true);
    const [showOrderOptions, setShowOrderOptions] = useState(false);

    const handleShowClick = () => {
        setShowOptions(prev => !prev);

    };

    const handleShowElementsClick = () => {
        setShowOptions(prev => !prev);

    };
    const handleOrderOptionsClick = (order) => {
        setOrderOption(order);
    }

    return (
        <>
            <div className="options-pill-whole-container">
                <div
                    className={`options-pill-header ${showOptions ? 'active' : ''}`}
                    onClick={handleShowClick}
                >
                    <p className="options-pill-arrow" >➸</p>
                    <p> Track Order</p>
                </div>
                {showOptions ? (
                    <>
                        <div className="options-pill-content-container">

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
                ) : (<></>)}
            </div>


        </>
    );
};





export default OrderOptions;
