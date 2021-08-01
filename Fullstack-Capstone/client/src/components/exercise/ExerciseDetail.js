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

    console.log(exercise)

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <h1>{exercise.name}</h1>
                    <Link to={`/exercise/edit/${exercise.id}`}><button class="btn btn-primary btn btn-secondary">Edit</button></Link>
                    <h4>Recommended Sets: {exercise.sets}</h4>
                    <h4>Recommended Reps: {exercise.reps}</h4>
                    <br></br>
                    <h4>{exercise.description}</h4>
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetail;