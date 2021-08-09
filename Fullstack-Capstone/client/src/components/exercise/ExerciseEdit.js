import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getExerciseById, updateExercise } from "../../modules/exerciseManager";
import "./ExerciseForm.css"

const ExerciseForm = () => {
    const [exercise, setExercise] = useState();
    const history = useHistory();
    const { id } = useParams();

    const getExerciseToEdit = () => {
        getExerciseById(id).then(exercise => setExercise(exercise))
    }

    useEffect(() => {
        getExerciseToEdit();
    }, []);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;
        const exerciseCopy = { ...exercise };
        exerciseCopy[key] = value;
        setExercise(exerciseCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();

        const editedExercise = {
            id: exercise.id,
            name: exercise.name,
            sets: exercise.sets,
            reps: exercise.reps,
            description: exercise.description,
            url: exercise.url
        }

        updateExercise(editedExercise).then((p) => {
            // Navigate the user back to the home route
            history.push('/exercises');
        });
    };

    return (
        <Form className="exFormContainer">
            <FormGroup>
                <Input hidden name="id" id="id"
                    value={exercise?.id}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup className="exFormNameBin">
                <Label className="exFormLabels" for="name">Exercise Name</Label>
                <Input type="text" name="name" id="name"
                    value={exercise?.name}
                    onChange={handleInputChange} />
            </FormGroup>
            <div className="exFormSetRep">
                <FormGroup className="exFormSetBin">
                    <Label className="exFormLabels" for="sets">Recommended Sets</Label>
                    <Input type="int" name="sets" id="sets"
                        value={exercise?.sets}
                        onChange={handleInputChange} />
                </FormGroup>
                <FormGroup className="exFormRepBin">
                    <Label className="exFormLabels" for="reps">Recommended Reps</Label>
                    <Input type="int" name="reps" id="reps"
                        value={exercise?.reps}
                        onChange={handleInputChange} />
                </FormGroup>
            </div>
            <FormGroup>
                <Label className="exFormLabels" for="description">Description</Label>
                <Input type="textarea" name="description" id="description"
                    value={exercise?.description}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label className="exFormLabels" for="url">(Optional) URL</Label>
                <Input type="text" name="url" id="url"
                    value={exercise?.url}
                    onChange={handleInputChange} />
            </FormGroup>
            <div className="exFormButtonBin">
                <Button className="exFormCancelButton" onClick={() => history.push(`/exercise/detail/${id}`)}>Cancel</Button>
                <Button className="exFormSaveButton" onClick={handleSave}>Save</Button>
            </div>
        </Form>
    );
};

export default ExerciseForm;
