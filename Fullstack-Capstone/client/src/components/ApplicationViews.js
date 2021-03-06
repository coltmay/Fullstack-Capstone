import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Dashboard
import Dashboard from "../components/Dashboard";
// ResInstance
import ResInstanceList from "./resinstance/ResInstanceList"
import ResInstanceDetail from "./resinstance/ResInstanceDetail";
import ResInstanceEdit from "./resinstance/ResInstanceEdit";
import ResInstanceForm from "./resinstance/ResInstanceForm";
// Exercises
import ExerciseList from "./exercise/ExerciseList";
import ExerciseDetail from "./exercise/ExerciseDetail";
import ExerciseEdit from "./exercise/ExerciseEdit";
import ExerciseForm from "./exercise/ExerciseForm";
// ResInstance Exercises
import RexDetail from "./rex/RexDetail";
import RexEdit from "./rex/RexEdit";
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
                   //? ============ D A S H B O A R D ============
                   //? =========================================*/}
                <Route path="/dashboard">
                    {isLoggedIn ? <Dashboard /> : <Redirect to="/login" />}
                </Route>


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

                {/* //? EDIT PAGE */}
                <Route path="/resinstances/edit/:id(\d+)">
                    {isLoggedIn ? <ResInstanceEdit /> : <Redirect to="/login" />}
                </Route>

                {/* //? FORM PAGE */}
                <Route path="/resinstances/form/">
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
                <Route path="/exercise/detail/:id(\d+)">
                    {isLoggedIn ? <ExerciseDetail /> : <Redirect to="/login" />}
                </Route>

                {/* //? Edit PAGE */}
                <Route path="/exercise/edit/:id(\d+)">
                    {isLoggedIn ? <ExerciseEdit /> : <Redirect to="/login" />}
                </Route>

                {/* //? FORM PAGE */}
                <Route path="/exercise/form">
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
                <Route path="/rex/detail/:resinstanceid(\d+)/:rexid(\d+)">
                    {isLoggedIn ? <RexDetail /> : <Redirect to="/login" />}
                </Route>

                {/* //? REX EXERCISE LIST */}
                <Route path="/rexexercise/:resinstanceid(\d+)">
                    {isLoggedIn ? <ExerciseList /> : <Redirect to="/login" />}
                </Route>

                {/* //? Edit PAGE */}
                <Route path="/rex/edit/:resinstanceid(\d+)/:rexid(\d+)/">
                    {isLoggedIn ? <RexEdit /> : <Redirect to="/login" />}
                </Route>

                {/* //? FORM PAGE */}
                <Route path="/rex/form/:resinstanceid(\d+)/:exerciseid(\d+)/">
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
