import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ResInstanceList from "./resinstance/ResInstanceList"

export default function ApplicationViews({ isLoggedIn }) {
    return (
        <main>
            <Switch>
                {/* <Route path="/" exact>
                    {isLoggedIn ? <QuoteList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/add">
                    {isLoggedIn ? <QuoteAddForm /> : <Redirect to="/login" />}
                </Route> */}

                <Route path="/resinstances">
                    <ResInstanceList />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </main>
    );
};
