import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { deleteExercise, getExerciseById } from "../../modules/exerciseManager";

const ExerciseDetail = () => {
    const [exercise, setExercise] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    const getExercise = () => {
        getExerciseById(id).then(exercise => setExercise(exercise));
    };

    const deleteCurrentExercise = () => {
        deleteExercise(id).then((p) => {
            history.push(`/exercises`)
        });
    }

    useEffect(() => {
        getExercise();
    }, []);

    console.log(exercise)

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <h1>{exercise.name}</h1>
                    <Link to={`/exercise/edit/${exercise.id}`}><Button color="primary">Edit</Button></Link>
                    <Button color="danger" onClick={() => deleteCurrentExercise(id)}>Delete</Button>
                    <h4>Recommended Sets: {exercise.sets}</h4>
                    <h4>Recommended Reps: {exercise.reps}</h4>
                    <br></br>
                    <h4>{exercise.description}</h4>
                    <Button color="secondary" onClick={() => history.push(`/exercises`)}>Back</Button>
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetail;