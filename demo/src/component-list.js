import React from 'react';
import AccordionComponent from 'components/accordion/accordion';
import SortableTableComponent from 'components/sortable-table/sortable-table';
import ProgressBarComponent from 'components/progress-bar/progress-bar';

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
    {
        name: 'Progress Bar',
        id: 'progress-bar',
        component: <ProgressBarComponent id="progress-bar"/>,
    },
];

export default componentList;