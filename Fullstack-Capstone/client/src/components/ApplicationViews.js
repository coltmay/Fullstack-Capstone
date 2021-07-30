import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ResInstanceList from "./resinstance/ResInstanceList"

import Test from "./temp/Test"

export default function ApplicationViews({ isLoggedIn }) {
    return (
        <main>
            <Switch>
                {/*//? ===========================================
                   //? ========= R E S I N S T A N C E S =========
                   //? =========================================*/}

                {/*//! LIST PAGE HERE */}
                <Route path="/resinstances/:userId(\d+)">
                    {isLoggedIn ? <ResInstanceList /> : <Redirect to="/login" />}
                </Route>

                {/*//! DETAIL PAGE HERE */}
                <Route path="/resinstances/detail/:id(\d+)">
                    {isLoggedIn ? <Test /> : <Redirect to="/login" />}
                </Route>

                {/*//! FORM PAGE HERE */}
                <Route path="/resinstances/form/:id(\d+)">
                    {isLoggedIn ? <Test /> : <Redirect to="/login" />}
                </Route>

                {/*//? ===========================================
                   //? =========== E X C E R C I S E S ===========
                   //? =========================================*/}

                {/*//! LIST PAGE HERE */}
                <Route path="/exercises">
                    {isLoggedIn ? <Test /> : <Redirect to="/login" />}
                </Route>

                {/*//! DETAIL PAGE HERE */}
                <Route path="/exercises/detail/:id(\d+)">
                    {isLoggedIn ? <Test /> : <Redirect to="/login" />}
                </Route>

                {/*//! FORM PAGE HERE */}
                <Route path="/exercises/form/:id(\d+)">
                    {isLoggedIn ? <Test /> : <Redirect to="/login" />}
                </Route>

                {/* //? ===========================================
                    //?  R E S I S T A N C E   E X C E R C I S E S
                    //? =========================================*/}

                {/*//! LIST PAGE HERE */}
                <Route path="/rex/:userId(\d+)">
                    {isLoggedIn ? <Test /> : <Redirect to="/login" />}
                </Route>

                {/*//! DETAIL PAGE HERE */}
                <Route path="/rex/detail/:id(\d+)">
                    {isLoggedIn ? <Test /> : <Redirect to="/login" />}
                </Route>

                {/*//! FORM PAGE HERE */}
                <Route path="/rex/form/:id(\d+)">
                    {isLoggedIn ? <Test /> : <Redirect to="/login" />}
                </Route>

                {/*//? ===========================================
                   //? ================ M E A L S ================
                   //? =========================================*/}

                {/*//! LIST PAGE HERE */}
                <Route path="/meals/:userId(\d+)">
                    {isLoggedIn ? <Test /> : <Redirect to="/login" />}
                </Route>

                {/*//! DETAIL PAGE HERE */}
                <Route path="/meals/detail/:id(\d+)">
                    {isLoggedIn ? <Test /> : <Redirect to="/login" />}
                </Route>

                {/*//! FORM PAGE HERE */}
                <Route path="/meals/form/:id(\d+)">
                    {isLoggedIn ? <Test /> : <Redirect to="/login" />}
                </Route>

                {/*//? ===========================================
                   //? ================= U S E R =================
                   //? =========================================*/}

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
