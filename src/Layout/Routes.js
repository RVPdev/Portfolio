import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

function Routes () {
    return (
        <Switch>
            <Route exact={true} path="/">
                <Redirect to={"/home"} />
            </Route>
        </Switch>
    );
}

export default Routes;
