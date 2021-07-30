import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// ResInstance
import ResInstanceList from "./resinstance/ResInstanceList"
import ResInstanceDetail from "./resinstance/ResInstanceDetail";
import ResInstanceForm from "./resinstance/ResInstanceForm";
// Exercises
import ExerciseList from "./exercise/ExerciseList";
import ExerciseDetail from "./exercise/ExerciseDetail";
import ExerciseForm from "./exercise/ExerciseForm";
// ResInstance Exercises
import RexDetail from "./rex/RexDetail";
import RexForm from "./rex/RexForm";
// Meals
import MealForm from "./meal/MealForm";
// User
import Login from "./auth/Login";
import Register from "./auth/Register";

export default function ApplicationViews({ isLoggedIn }) {
    return (
        <main>
            <Switch>
                {/*//? ===========================================
                   //? ========= R E S I N S T A N C E S =========
                   //? =========================================*/}

                {/* //? LIST PAGE */}
                <Route path="/myresinstances">
                    {isLoggedIn ? <ResInstanceList /> : <Redirect to="/login" />}
                </Route>

                {/* //? DETAIL PAGE */}
                <Route path="/resinstances/detail/:id(\d+)">
                    {isLoggedIn ? <ResInstanceDetail /> : <Redirect to="/login" />}
                </Route>

                {/* //? FORM PAGE */}
                <Route path="/resinstances/form/:id(\d+)">
                    {isLoggedIn ? <ResInstanceForm /> : <Redirect to="/login" />}
                </Route>

                {/*//? ===========================================
                   //? =========== E X C E R C I S E S ===========
                   //? =========================================*/}

                {/* //? LIST PAGE */}
                <Route path="/exercises">
                    {isLoggedIn ? <ExerciseList /> : <Redirect to="/login" />}
                </Route>

                {/* //? DETAIL PAGE */}
                <Route path="/exercises/detail/:id(\d+)">
                    {isLoggedIn ? <ExerciseDetail /> : <Redirect to="/login" />}
                </Route>

                {/* //? FORM PAGE */}
                <Route path="/exercises/form/:id(\d+)">
                    {isLoggedIn ? <ExerciseForm /> : <Redirect to="/login" />}
                </Route>

                {/* //? ===========================================
                    //?  R E S I S T A N C E   E X C E R C I S E S
                    //? =========================================*/}

                {/* // LIST PAGE
                <Route path="/rex/:userId(\d+)">
                    {isLoggedIn ? <RexList /> : <Redirect to="/login" />}
                </Route> */}

                {/*// DETAIL PAGE */}
                <Route path="/rex/detail/:id(\d+)">
                    {isLoggedIn ? <RexDetail /> : <Redirect to="/login" />}
                </Route>

                {/* //? FORM PAGE */}
                <Route path="/rex/form/:id(\d+)">
                    {isLoggedIn ? <RexForm /> : <Redirect to="/login" />}
                </Route>

                {/*//? ===========================================
                   //? ================ M E A L S ================
                   //? =========================================*/}

                {/* //? FORM PAGE */}
                <Route path="/meals/form/:id(\d+)">
                    {isLoggedIn ? <MealForm /> : <Redirect to="/login" />}
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
