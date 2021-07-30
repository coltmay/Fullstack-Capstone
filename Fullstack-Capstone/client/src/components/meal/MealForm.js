import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addMeal } from "../../modules/mealManager";

const MealForm = () => {
    const emptyMeal = {
        resInstanceId: '',
        ExerciseId: '',
        Weight: '',
        Difficulty: ''
    };

    const [meal, setMeal] = useState(emptyMeal);
    const history = useHistory();


    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const mealCopy = { ...meal };

        mealCopy[key] = value;
        setMeal(mealCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();
        addMeal(meal).then((p) => {
            // Navigate the user back to the home route
            history.push("/");
        });
    };

    return (
        <h1>Meal Form</h1>
        // <Form>
        //     <FormGroup>
        //         <Label for="journal">Journal</Label>
        //         <Input type="textarea" name="journal" id="journal"
        //             value={meal.journal}
        //             onChange={handleInputChange} />
        //     </FormGroup>
        //     <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
        // </Form>
    );
};

export default MealForm;
