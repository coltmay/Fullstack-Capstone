import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Resinstances
import { getResInstancesByUser } from "../../modules/resinstanceManager";
import { getResInstanceById } from "../../modules/resinstanceManager";

// Exercises
import { getAllExercises } from "../../modules/exerciseManager";
import { getExerciseById } from "../../modules/exerciseManager";


const Test = () => {
    const [resinstances, setResinstances] = useState([]);
    const [resinstance, setResinstance] = useState([]);

    const [exercises, setExercises] = useState([]);
    const [exercise, setExercise] = useState([]);
    const { userId } = useParams();

    // GET ALL RESINSTANCES BY USER
    const getResinstances = (userId) => {
        getResInstancesByUser(userId).then(resinstances => setResinstances(resinstances));
    };

    // GET RESINSTANCE BY ID //! HARD CODED
    const getResinstance = (id) => {
        getResInstanceById(id).then(resinstance => setResinstance(resinstance));
    };

    // GET ALL EXERCISES
    const getExercises = () => {
        getAllExercises().then(exercises => setExercises(exercises));
    };

    // GET EXERCISE BY ID //! HARD CODED
    const getExercise = (id) => {
        getExerciseById(id).then(exercise => setExercise(exercise))
    };

    // GET MEAL BY ID //! HARD CODED


    useEffect(() => {
        getResinstances(1);
        getResinstance(1);
        getExercises();
        getExercise(1);
    }, []);

    console.log("resinstances", resinstances)
    console.log("resinstance", resinstance)
    console.log("exercises", exercises)
    console.log("exercise", exercise)

    return (
        <>
            Nothing here yet.
        </>
    )
};

export default Test;