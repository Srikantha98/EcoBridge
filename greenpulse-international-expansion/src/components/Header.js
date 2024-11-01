import React from "react";
import {link} from 'react-router-dom';

const Header = () => {
    return (
        <Header>
                <nav>
                    <link to='/'>Home</link>
                    <link to='/complience'>complience</link>
                    <link to='/incentives'>incentives</link>
                    <link to='/upload'>upload Documents</link>

                </nav>
        </Header>
    );
};

export default Header;