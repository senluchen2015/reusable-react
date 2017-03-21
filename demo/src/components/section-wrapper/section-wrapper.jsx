import React, { PropTypes } from 'react';
import './section-wrapper.scss';

const SectionWrapper = ({ id, title, children, sourceLink }) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            <div className="component-wrapper">
                {children[0]}
            </div>
            <div className="pre-wrapper">
                {children[1]}
            </div>
            <a href={sourceLink}>Source</a>
        </section>
    );
};

SectionWrapper.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    sourceLink: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element),
};

export default SectionWrapper;