import React, { PropTypes } from 'react';
import SectionWrapper from 'components/section-wrapper/section-wrapper';
import { Accordion } from '../../../../web/reusable-react';

const AccordionComponent = ({ id }) => {
    return (
        <SectionWrapper title="Accodion" id={id} sourceLink="https://github.com">
            <Accordion title="Example Accordion">
                <div>I can be anything</div>
                <button>like a button or</button>
                <Accordion title="Another Accordion">
                    <div>Accordion</div>
                </Accordion>
            </Accordion>
            <pre>
                <code className="html solarized-dark" >
                    {'<Accordion title="Example Accordion">\n'}
                    {'    <div>I can be anything</div>\n'}
                    {'    <button>like a button or</button>\n'}
                    {'    <Accordion title="Another Accordion">\n'}
                    {'          <div>Accordion</div>\n'}
                    {'    </Accordion>\n'}
                    {'</Accordion>\n'}
                </code>
            </pre>
            <pre>
                <code className="html solarized-dark" >
                    {'<Accordion title="Example Accordion">\n'}
                    {'    <div>I can be anything</div>\n'}
                    {'    <button>like a button or</button>\n'}
                    {'    <Accordion title="Another Accordion">\n'}
                    {'          <div>Accordion</div>\n'}
                    {'    </Accordion>\n'}
                    {'</Accordion>\n'}
                </code>
            </pre>
        </SectionWrapper>
    );
};

AccordionComponent.propTypes = {
    id: PropTypes.string,
};

export default AccordionComponent;