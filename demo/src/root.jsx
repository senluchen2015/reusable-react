import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Nav } from 'components';
import componentList from './component-list';

class Root extends React.Component {
    render() {
        return (
            <AppContainer>
                <div className="root" >
                    <Nav navList={componentList}/>
                    <div className="main-container">
                        {componentList.map((c) => {
                            return c.component;
                        })}
                    </div>
                </div>
            </AppContainer>
        );
    }
}
export default Root;