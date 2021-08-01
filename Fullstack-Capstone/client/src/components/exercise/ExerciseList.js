import React, { useEffect, useState } from "react";
import ExerciseCard from './ExerciseCard';
import { getAllExercises } from "../../modules/exerciseManager";
import { Link, useHistory, useParams } from "react-router-dom"


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
                    <Link to="exercise/form">Add</Link>
                    {exercises.map((exercise) => (
                        <ExerciseCard exercise={exercise} key={exercise.id} resinstanceid={resinstanceid} />
                    ))}
                </div>
                {resinstanceid ? <button onClick={() => history.push(`/resinstances/detail/${resinstanceid}`)}>Back</button> : null}
            </div>
        </>
    );
};

export default ExerciseList;