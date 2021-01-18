import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomeContainer from '../containers/Home';

const About = () => {
    return (<h2>About</h2>);
}

const Index = (props) => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={(props) => (
                    <HomeContainer {...props} Layout={About} />
                )} />
            </Switch>
        </>
    )
}

export default Index;