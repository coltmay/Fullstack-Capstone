import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { deleteExercise, getExerciseById } from "../../modules/exerciseManager";
import "./ExerciseDetail.css";

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

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <h1 className="exDetailName">{exercise.name}</h1>
                    <Link to={`/exercise/edit/${exercise.id}`}><Button className="exDetailEdit">Edit</Button></Link>
                    <Button className="exDetailDelete" onClick={() => deleteCurrentExercise(id)}>Delete</Button>
                    <h4 className="exDetailSets">Recommended Sets: {exercise.sets}</h4>
                    <h4 className="exDetailReps">Recommended Reps: {exercise.reps}</h4>
                    <h4 className="exDetailDesc">{exercise.description}</h4>
                    <Button className="exDetailBack" onClick={() => history.push(`/exercises`)}>Back</Button>
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetail;