import React, { useEffect, useState } from "react";
import ExerciseCard from './ExerciseCard';
import { getAllExercises } from "../../modules/exerciseManager";


const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);

    const getExercises = () => {
        getAllExercises().then(exercises => setExercises(exercises));
    };

    useEffect(() => {
        getExercises();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    {exercises.map((exercise) => (
                        <ExerciseCard exercise={exercise} key={exercise.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ExerciseList;