import React from 'react';
import AccordionComponent from 'components/accordion/accordion';
import SortableTableComponent from 'components/sortable-table/sortable-table';

const componentList = [
    {
        name: 'Accordion',
        id: 'accordion',
        component: <AccordionComponent id="accordion"/>,
    },
    {
        name: 'Sortable Table',
        id: 'sortable-table',
        component: <SortableTableComponent id="sortable-table"/>,
    },
];

export default componentList;