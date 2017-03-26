import React, { PropTypes } from 'react';
import './sortable-table.scss';
import Pagination from './Pagination';

class SortableTable extends React.Component {
    constructor(props) {
        super(props);
        const rowsPerPage = props.rowsPerPage ? props.rowsPerPage : props.data.length;
        this.state = {
            rowsPerPage: rowsPerPage,
            totalPages: Math.ceil(props.data.length / rowsPerPage),
            currentPage: 0,
            sortedColumn: {},
            sortedData: props.data ? props.data.slice() : [],
        };
    }

    filterByPage(allRows, currentPage, rowsPerPage) {
        return allRows.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);
    }

    movePage(page) {
        if (page >= 0 && page < this.state.totalPages) {
            this.setState({
                currentPage: page,
            });
        }
    }

    sort(column) {
        function comparator(data, column, isAsc) {
            return data.sort((a, b) => {
                if (a[column] < b[column]) return isAsc ? -1 : 1;
                if (a[column] > b[column]) return isAsc ? 1 : -1;
                return 0;
            });
        }

        const { sortedData } = this.state;
        const isAsc = column === this.state.sortedColumn.column && this.state.sortedColumn.direction === 'asc';
        this.setState({
            sortedColumn: {
                column: column,
                direction: isAsc ? 'desc' : 'asc',
            },
            sortedData: comparator(sortedData, column, isAsc),
        });
    }

    render() {
        const { className, headers } = this.props;
        const { currentPage, sortedData, sortedColumn, totalPages, rowsPerPage } = this.state;
        return (
            <div className="reusable-react sortable-table">
                <table className={`${className || ''}`}>
                    <tbody>
                        <tr>
                        {headers && headers.map((h, column) => {
                            if (h.sortable) {
                                return (
                                    <th key={column}>
                                        <a className={sortedColumn.column === column && 'sorted' || ''}
                                            onClick={this.sort.bind(this, column)}
                                        >
                                        {h.name}
                                        </a>
                                    </th>
                                );
                            } else {
                                return <th key={column}>{h.name}</th>;
                            }
                        })}
                        </tr>
                        {this.filterByPage(sortedData, currentPage, rowsPerPage).map((d, row) => {
                            return (
                                <tr key={row}>
                                    {d.map((v, col) => {
                                        return <td key={col}>{v}</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onMovePage={this.movePage.bind(this)}
                />
            </div>
        );
    }
}


SortableTable.propTypes = {
    className: PropTypes.string,
    rowsPerPage: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
    headers: PropTypes.arrayOf(PropTypes.object),
};

export default SortableTable;