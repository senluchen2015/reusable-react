import React, { PropTypes } from 'react';

const createPageNumberArray = (length) => {
    return Array.from({ length: length }, (a, b) => b + 1);
};

const Pagination = ({ totalPages, currentPage, onMovePage }) => {
    if (totalPages) {
        return (
            <div className="pages">
                <a onClick={onMovePage.bind(null, 0)}>First</a>
                <a onClick={onMovePage.bind(null, currentPage - 1)} className="previous">
                </a>
                {createPageNumberArray(totalPages).map((p) => {
                    return (
                        <a
                            key={p}
                            className={`${p - 1 === currentPage && 'active' || ''}`}
                            onClick={onMovePage.bind(null, p - 1)}
                        >
                            {p}
                        </a>);
                })}
                <a onClick={onMovePage.bind(null, currentPage + 1)} className="next"></a>
                <a onClick={onMovePage.bind(null, totalPages - 1)}>Last</a>
            </div>
        );
    }
    return <div></div>;
};

Pagination.propTypes = {
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    onMovePage: PropTypes.func,
};

export default Pagination;