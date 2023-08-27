import React, { useState } from 'react';
import './TabNavigator.css'; // You can style this component using a CSS file

const TabNavigator = ({ theme }) => {
    const [activeTab, setActiveTab] = useState(1);
    const [tabCount, setTabCount] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const handleAddTab = () => {
        setTabCount(tabCount + 1);
    };

    return (
        <>
            <div className="tab-container">
                {Array.from({ length: tabCount }).map((_, index) => (
                    <div
                        key={index}
                        className={`tab`}
                        style={{
                            backgroundColor: activeTab === index + 1 ? theme : 'white',
                            color: activeTab === index + 1 ? 
                            theme === 'lightgrey' ? 'black' : 'white' : 'black',
                            border: activeTab === index + 1 ? 'none' : '1px solid grey',
                            margin: '0 5px'
                        }}
                        onClick={() => handleTabClick(index + 1)}
                    >
                        Tab {index + 1}
                    </div>
                ))}
                <div className="tab" onClick={handleAddTab}>
                    +
                </div>
            </div>
            <div className="tab-content"
            style={{
                backgroundColor: theme,
                color: theme === 'lightgrey' ? 'black' : 'white',
                fontSize: '5rem',
            }}
            >Tab {activeTab}</div>
        </>
    );
};

export default TabNavigator;
