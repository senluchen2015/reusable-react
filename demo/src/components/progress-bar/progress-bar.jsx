import React, { PropTypes } from 'react';
import SectionWrapper from 'components/section-wrapper/section-wrapper';
import { ProgressBar } from '../../../../web/reusable-react';

class ProgressBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
        this.increase();
    }

    increase() {
        setInterval(() => {
            this.setState({
                current: (this.state.current + 1) % 100,
            });
        }, 1000);
    }

    render() {
        const { id } = this.props;
        const { current } = this.state;
        return (
            <SectionWrapper title="Progress Bar" id={id} sourceLink="https://github.com/senluchen2015/reusable-react/tree/master/src/ProgressBar">
                <ProgressBar
                    current={current}
                    max={100}
                />
                <pre>
                    <code className="javascript solarized-dark" >
                        {'setInterval(() => {\n'}
                        {'    this.setState({\n'}
                        {'        current: (this.state.current + 1) % 100,\n'}
                        {'    });\n'}
                        {'}, 1000);\n\n'}
                        {'<ProgressBar\n'}
                        {'    current={current}\n'}
                        {'    max={100}\n'}
                        {'/>\n'}
                    </code>
                </pre>
            </SectionWrapper>
        );
    }
}

ProgressBarComponent.propTypes = {
    id: PropTypes.string,
};

export default ProgressBarComponent;