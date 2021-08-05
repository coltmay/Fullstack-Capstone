import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getExerciseById } from '../../modules/exerciseManager';
import { addRex } from "../../modules/rexManager";
import "./RexForm.css"

const RexForm = () => {
    const [exercise, setExercise] = useState({});
    const { resinstanceid, exerciseid } = useParams();
    const history = useHistory();

    const emptyRex = {
        resinstanceid: resinstanceid,
        exerciseid: exerciseid,
        weight: 0,
        difficulty: 0
    };

    const [rex, setRex] = useState(emptyRex);

    const getExerciseToEdit = () => {
        getExerciseById(exerciseid).then(exercise => setExercise(exercise))
    }

    useEffect(() => {
        getExerciseToEdit();
    }, []);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const rexCopy = { ...rex };

        rexCopy[key] = value;
        setRex(rexCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();
        addRex(rex).then((p) => {
            // Navigate the user back to the home route
            history.push(`/resinstances/detail/${resinstanceid}`);
        });
    };

    return (
        <Form>
            <h2 className="rexFormName">{exercise.name}</h2>
            <p className="rexForDesc">{exercise.description}</p>
            <p className="rexFormSets">Sets: {exercise.sets}</p>
            <p className="rexFormReps">Reps: {exercise.reps}</p>
            <FormGroup className="rexFormWeightBin">
                <Label className="rexFormWeightLable" for="weight">Weight</Label>
                <Input className="rexFormWeightInput" type="int" name="weight" id="weight"
                    value={rex.name}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup className="rexFormDifficultyBin">
                <Label className="rexFormDifficultyLable" for="difficulty">Difficulty</Label>
                <Input className="rexFormDifficultyInput" type="difficulty" name="difficulty" id="difficulty"
                    value={rex.difficulty}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="rexFormSave" onClick={handleSave}>Save</Button>
            <Button className="rexFormCancel" onClick={() => history.push(`/resinstances/detail/${resinstanceid}`)}>Cancel</Button>
        </Form>
    );
};


export default RexForm;
