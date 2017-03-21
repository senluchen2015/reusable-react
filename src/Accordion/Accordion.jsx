import React, { PropTypes } from 'react';
import './Accordion.scss';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    toggle() {
        this.setState({ visible: !this.state.visible });
    }

    render() {
        const { title, children } = this.props;
        const { visible } = this.state;
        return (
            <div className="react-component accordion">
                <label className={visible && 'open'} onClick={this.toggle.bind(this)}>
                    {title}
                </label>
                <div className={`children ${visible && 'open'}`}>
                    {children}
                </div>
            </div>
        );
    }
}

Accordion.propTypes = {
    title: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object),
};

export default Accordion;