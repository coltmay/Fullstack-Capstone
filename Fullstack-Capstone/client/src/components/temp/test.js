import React, { useEffect, useState } from "react";

// Resinstances
import { getResInstancesById } from "../../modules/resinstanceManager";

const test = () => {
    const [resinstances, setResinstances] = useState([]);
    const { userId } = useParams();

    const getResinstances = () => {
        getResInstancesByUser(userId).then(resinstances => setResinstances(resinstances));
    };

    const getExercises = () => {

    }

    const getMeals = () => {

    }

    const getRex = () => {

    }

    useEffect(() => {
        getResinstances();
    }, []);

    return (
        <>
            Nothing here yet.
        </>
    );
};

export default test;