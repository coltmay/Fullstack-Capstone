import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addExercise } from "../../modules/exerciseManager";

const ExerciseForm = () => {
    const emptyExercise = {
        name: '',
        sets: '',
        reps: '',
        description: '',
        url: ''
    };

    const [exercise, setExercise] = useState(emptyExercise);
    const history = useHistory();

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const exerciseCopy = { ...exercise };

        exerciseCopy[key] = value;
        setExercise(exerciseCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();
        addExercise(exercise).then((p) => {
            // Navigate the user back to the home route
            history.push(`/exercises`);
        });
    };

    return (
        <Form>
            <h1>Exercise Form</h1>
            <FormGroup>
                <Label for="name">name</Label>
                <Input type="text" name="name" id="name"
                    value={exercise.name}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="sets">Recommended Sets</Label>
                <Input type="int" name="sets" id="sets"
                    value={exercise.sets}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="reps">Recommended Reps</Label>
                <Input type="int" name="reps" id="reps"
                    value={exercise.reps}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description"
                    value={exercise.description}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="url">(Optional) URL</Label>
                <Input type="text" name="url" id="url"
                    value={exercise.url}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button color="primary" onClick={handleSave}>Save</Button>
            <Button color="secondary" onClick={() => history.push(`/exercises`)}>Cancel</Button>
        </Form>
    );
};

export default ExerciseForm;
