import React, { PropTypes } from 'react';
import SectionWrapper from 'components/section-wrapper/section-wrapper';
import { SortableTable } from '../../../../web/reusable-react';

const headers = [
    {
        name: 'id',
        sortable: true,
    },
    {
        name: 'first name',
        sortable: true,
    },
    {
        name: 'last name',
        sortable: true,
    },
    {
        name: 'age',
        sortable: false,
    },
];

const data = [
    ['1', 'Tom', 'Chen', '24'],
    ['2', 'Smith', 'Cat', '23'],
    ['3', 'Bob', 'Smith', '20'],
    ['4', 'Joe', 'Jane', '12'],
    ['5', 'Ken', 'Smith', '31'],
    ['6', 'Sarah', 'Chen', '23'],
];

const SortableTableComponent = ({ id }) => {
    return (
        <SectionWrapper title="Sortable Table" id={id} sourceLink="https://github.com/senluchen2015/reusable-react/tree/master/src/SortableTable">
            <SortableTable
                rowsPerPage={3}
                headers={headers}
                data={data}
            />
            <pre>
                <code className="javascript solarized-dark" >
                    {'const headers = [\n'}
                    {'    {\n'}
                    {'        name: "id",\n'}
                    {'        sortable: true,\n'}
                    {'    },\n'}
                    {'    {\n'}
                    {'        name: "first name",\n'}
                    {'        sortable: true,\n'}
                    {'    },\n'}
                    {'    {\n'}
                    {'        name: "last name",\n'}
                    {'        sortable: true,\n'}
                    {'    },\n'}
                    {'    {\n'}
                    {'        name: "age",\n'}
                    {'        sortable: false,\n'}
                    {'    },\n'}
                    {'];\n'}
                    {'\n'}
                    {'const data = [\n'}
                    {'    ["1" "Tom", "Chen", "24"],\n'}
                    {'    ["2" "Smith", "Cat", "23"],\n'}
                    {'    ["3" "Bob", "Smith", "20"],\n'}
                    {'    ["4" "Joe" "Jane" "12"],\n'}
                    {'    ["5" "Ken" "Smith" "31"],\n'}
                    {'    ["6" "Sarah" "Chen" "23"],\n'}
                    {'];\n\n'}
                    {'<SortableTable\n'}
                    {'    rowsPerPage={3}\n'}
                    {'    headers={headers}\n'}
                    {'    data={data}\n'}
                    {'/>\n'}
                </code>
            </pre>
        </SectionWrapper>
    );
};

SortableTableComponent.propTypes = {
    id: PropTypes.string,
};

export default SortableTableComponent;