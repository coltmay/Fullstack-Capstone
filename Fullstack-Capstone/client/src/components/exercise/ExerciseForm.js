import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addExercise } from "../../modules/exerciseManager";

const ExerciseForm = () => {
    const emptyExercise = {
        Name: '',
        Sets: '',
        Reps: '',
        Description: '',
        URL: ''
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
            history.push("/");
        });
    };

    return (
        <h1>Exercise Form</h1>
        // <Form>
        //     <FormGroup>
        //         <Label for="journal">Journal</Label>
        //         <Input type="textarea" name="journal" id="journal"
        //             value={exercise.journal}
        //             onChange={handleInputChange} />
        //     </FormGroup>
        //     <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
        // </Form>
    );
};

export default ExerciseForm;
