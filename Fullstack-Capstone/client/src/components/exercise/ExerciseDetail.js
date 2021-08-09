import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getCurrentUser } from "../../modules/authManager";
import { deleteExercise, getExerciseById } from "../../modules/exerciseManager";
import "./ExerciseDetail.css";

const ExerciseDetail = () => {
    const [exercise, setExercise] = useState([]);
    const [user, setUser] = useState({});
    const { id } = useParams();
    const history = useHistory();

    const getExercise = () => {
        getExerciseById(id).then(exercise => setExercise(exercise));
    };

    const getUser = () => {
        getCurrentUser().then(user => setUser(user));
    }

    const deleteCurrentExercise = () => {
        deleteExercise(id).then((p) => {
            history.push(`/exercises`)
        });
    }

    useEffect(() => {
        getExercise();
        getUser();
    }, []);

    return (
        <div className="exDetailContainer">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <div className="exHeaderBin">
                        <h1 className="exDetailName">{exercise.name}</h1>
                        {(user.userTypeId === 1) ?
                            <div className="exButtonBin">
                                <Link to={`/exercise/edit/${exercise.id}`}><Button className="exDetailEdit">Edit</Button></Link>
                                <Button className="exDetailDelete" onClick={() => deleteCurrentExercise(id)}>Delete</Button>
                            </div>
                            :
                            null
                        }
                    </div>
                    <div className="exSetRepHolder">
                        <h4 className="exDetailSets">Recommended Sets • {exercise.sets}</h4>
                        <h4 className="exDetailReps">Recommended Reps • {exercise.reps}</h4>
                    </div>
                    <h4 className="exDetailDesc">{exercise.description}</h4>
                    <Button className="exDetailBack" onClick={() => history.push(`/exercises`)}>Back</Button>
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetail;