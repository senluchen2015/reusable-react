import React from 'react';
import './nav.scss';

const Nav = ({ navList }) => {
    return (
        <nav>
            <h2>Reusable React Components</h2>
            {navList && navList.map((n, idx) => {
                return <a key={idx} href={`#${n.id}`}>{n.name}</a>;
            })}
        </nav>
    );
};

export default Nav;