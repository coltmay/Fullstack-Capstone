import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, useHistory, useParams } from "react-router-dom"
import ExerciseCard from './ExerciseCard';
import { getAllExercises } from "../../modules/exerciseManager";


const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    const history = useHistory();
    const { resinstanceid } = useParams();

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
                    <Link to="exercise/form"><Button color="primary">Add</Button></Link>
                    {exercises.map((exercise) => (
                        <ExerciseCard exercise={exercise} key={exercise.id} resinstanceid={resinstanceid} />
                    ))}
                </div>
                {resinstanceid ? <Button color="secondary" onClick={() => history.push(`/resinstances/detail/${resinstanceid}`)}>Back</Button> : null}
            </div>
        </>
    );
};

export default ExerciseList;