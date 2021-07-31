import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getExerciseById } from "../../modules/exerciseManager";

const ExerciseDetail = () => {
    const [exercise, setExercise] = useState([]);
    const { id } = useParams();

    const getExercise = () => {
        getExerciseById(id).then(exercise => setExercise(exercise));
    };

    useEffect(() => {
        getExercise();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <h1>{exercise.name}</h1>
                    <Link to={`/exercise/edit/${exercise.id}`}>Edit</Link>
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetail;