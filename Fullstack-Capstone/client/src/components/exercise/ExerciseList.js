import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, useHistory, useParams } from "react-router-dom"
import ExerciseCard from './ExerciseCard';
import { getAllExercises } from "../../modules/exerciseManager";
import "./ExerciseList.css";


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
                    <div className="elButtonHolder">
                        <Link to="exercise/form"><Button className="elAddButton">Add</Button></Link>
                    </div>
                    {exercises.map((exercise) => (
                        <ExerciseCard exercise={exercise} key={exercise.id} resinstanceid={resinstanceid} />
                    ))}
                </div>
                {resinstanceid ? <div className="elButtonHolder"><Button className="elBackButton" onClick={() => history.push(`/resinstances/detail/${resinstanceid}`)}>Back</Button></div> : null}
            </div>
        </>
    );
};

export default ExerciseList;