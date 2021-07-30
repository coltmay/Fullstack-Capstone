import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getExerciseById } from '../../modules/exerciseManager';
import { addRex } from "../../modules/rexManager";

const RexForm = () => {
    const [exercise, setExercise] = useState({});
    const { resinstanceid, exerciseid } = useParams();
    const history = useHistory();

    console.log(resinstanceid, exerciseid, exercise);

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
            <h1>Rex Form</h1>
            <h2>{exercise.name}</h2>
            <FormGroup>
                <Label for="weight">Weight</Label>
                <Input type="int" name="weight" id="weight"
                    value={rex.name}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="difficulty">Difficulty</Label>
                <Input type="difficulty" name="difficulty" id="difficulty"
                    value={rex.difficulty}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
        </Form>
    );
};


export default RexForm;
