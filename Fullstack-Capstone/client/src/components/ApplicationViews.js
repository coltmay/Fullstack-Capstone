import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ResInstanceList from "./resinstance/ResInstanceList"

import Hello from "./Hello"

export default function ApplicationViews({ isLoggedIn }) {
    return (
        <main>
            <Switch>
                {/*//! EXAMPLE FOR AUTH, IMPLEMENT LATER */}
                {/* <Route path="/" exact>
                    {isLoggedIn ? <QuoteList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/add">
                    {isLoggedIn ? <QuoteAddForm /> : <Redirect to="/login" />}
                </Route> */}

                {/*//? ===========================================
                   //? ========= R E S I N S T A N C E S =========
                   //? =========================================*/}
                <Route path="/resinstances/:userId(\d+)">
                    <ResInstanceList />
                </Route>

                {/*//! DETAIL PAGE HERE */}
                <Route path="/resinstances/detail/:id(\d+)">
                    <Hello />
                </Route>

                {/*//? ===========================================
                   //? =========== E X C E R C I S E S ===========
                   //? =========================================*/}

                {/* //? ===========================================
                    //?  R E S I S T A N C E   E X C E R C I S E S
                    //? =========================================*/}

                {/*//? ===========================================
                   //? ================ M E A L S ================
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
