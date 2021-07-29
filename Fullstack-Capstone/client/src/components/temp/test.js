import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Resinstances
import { getResInstancesByUser } from "../../modules/resinstanceManager";
import { getResInstanceById } from "../../modules/resinstanceManager";

// Exercises


const Test = () => {
    const [resinstances, setResinstances] = useState([]);
    const [resinstance, setResinstance] = useState([]);

    const [exercises, setExercises] = useState([]);
    const { userId } = useParams();

    // GET ALL RESINSTANCES BY USER
    const getResinstances = () => {
        getResInstancesByUser(userId).then(resinstances => setResinstances(resinstances));
    };

    // GET RESINSTANCE BY ID //! HARD CODED
    const getResinstance = () => {
        getResInstanceById(1).then(resinstance => setResinstance(resinstance));
    }

    //    GET ALL EXERCISES
    //    const getExercises = () => {
    //        getAllExercises().then(exercises => setExercises(exercises));
    //    }

    useEffect(() => {
        getResinstances();
        getResinstance();
        //        getExercises();
    }, []);

    console.log("resinstances", resinstances)
    console.log("resinstance", resinstance)
    //    console.log("exercises", exercises)

    return (
        <>
            Nothing here yet.
        </>
    );
};

export default Test;