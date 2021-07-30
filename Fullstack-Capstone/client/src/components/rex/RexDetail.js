import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ExerciseDetail = () => {
    const [exercise, setExercise] = useState([]);
    const { id } = useParams();

    const getExercise = () => {
        getResInstancesById(id).then(exercise => setExercise(exercise));
    };

    useEffect(() => {
        getExercise();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <h1>{exercise.name}</h1>
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetail;